import { create } from "zustand";

export type farmInputsTab = {
  activeTab: "seeds" | "fertilizers" | "pesticides" | "equipment";
  setActiveTab: (
    tab: "seeds" | "fertilizers" | "pesticides" | "equipment"
  ) => void;
};

export const usefarmInputsTabStore = create<farmInputsTab>((set) => ({
  activeTab: "seeds",
  setActiveTab: (tab: "seeds" | "fertilizers" | "pesticides" | "equipment") =>
    set((state) => ({ activeTab: tab })),
}));
