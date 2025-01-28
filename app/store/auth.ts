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
