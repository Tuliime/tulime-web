import { create } from "zustand";

export type User = {
  id: string;
  name: string;
  telNumber: string;
  role: string;
};

export type createUsers = {
  theInitialState: {
    token: string | null;
    isLoggedIn: boolean;
    user: User | null;
  };
  authenticateUser: (token: string, user: User) => void;
  logOutUser: () => void;
};

export const useAuthUserStore = create<createUsers>((set) => ({
  theInitialState: {
    token: null,
    isLoggedIn: false,
    user: { id: "", name: "", telNumber: "", role: "" },
  },
  logOutUser: () =>
    set((state) => ({
      theInitialState: {
        token: null,
        isLoggedIn: false,
        user: { id: "", name: "", telNumber: "", role: "" },
      },
    })),
  authenticateUser: (token: string, user: User) =>
    set((state) => ({
      theInitialState: { token: token, isLoggedIn: !!token, user: user },
    })),
}));
