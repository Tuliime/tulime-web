import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  telNumber: string;
  role: string;
};

export type AuthUserStore = {
  token: string;
  isLoggedIn: boolean;
  user: User | null;

  authenticateUser: (token: string, user: User) => void;
  logOutUser: () => void;
};

export const useAuthUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      token: "",
      isLoggedIn: false,
      user: null,
      authenticateUser: (token: string, user: User) =>
        set(() => ({
          token,
          isLoggedIn: !!token,
          user,
        })),
      logOutUser: () =>
        set(() => ({
          token: "",
          isLoggedIn: false,
          user: null,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);

// export const useAuthUserStore = create<createUsers>()(persist((set) => ({

//     token: "",
//     isLoggedIn: false,
//     user: { id: "", name: "", telNumber: "", role: "" },

//   logOutUser: () =>
//     set((state) => ({

//         token: "",
//         isLoggedIn: false,
//         user: { id: "", name: "", telNumber: "", role: "" },

//     })),
//   authenticateUser: (token: string, user: User) =>
//     set((state) => ({
//        token: token, isLoggedIn: !!token, user: user ,
//     })),
//     {
//       name: "auth-storage",
//     }
//   )
// }));
