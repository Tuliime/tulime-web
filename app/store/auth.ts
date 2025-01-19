import { create } from "zustand";

export type createUsers = {
  theInitialState: {
    token: string | null;
    isLoggedIn: boolean;
    user: {};
  };
  authenticateUser: (token: string | null, user: {}) => void;
  logOutUser: () => void;
};

export const useAuthUserStore = create<createUsers>((set) => ({
  theInitialState: {
    token: null,
    isLoggedIn: false,
    user: {},
  },
  logOutUser: () =>
    set((state) => ({
      theInitialState: { token: null, isLoggedIn: false, user: {} },
    })),
  authenticateUser: (token: string | null, user: {}) =>
    set((state) => ({
      theInitialState: { token: token, isLoggedIn: !!token, user: user },
    })),
}));
