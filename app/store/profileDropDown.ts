import { create } from "zustand";

export type profileDrop = {
  isDropDownActive: boolean;
  setDropDown: () => void;
};

export const useProfileDropDownStore = create<profileDrop>((set) => ({
  isDropDownActive: false,
  setDropDown: () =>
    set((state) => ({ isDropDownActive: !state.isDropDownActive })),
}));
