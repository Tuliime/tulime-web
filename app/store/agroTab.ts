import { create } from "zustand";

export type agroTab = {
  activeTab: "crops" | "livestock" | "fish" | "poultry";
  setActiveTab: (tab: "crops" | "livestock" | "fish" | "poultry") => void;
};

export const useAgroTabStore = create<agroTab>((set) => ({
  activeTab: "crops",
  setActiveTab: (tab: "crops" | "livestock" | "fish" | "poultry") =>
    set((state) => ({ activeTab: tab })),
}));
