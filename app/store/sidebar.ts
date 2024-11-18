import { create } from "zustand";
export type TSidebar = {
    isOpen: boolean;
  };
  
  export type TSidebarAction = {
    openSidebar: () => void;
    closeSidebar: () => void;
  };

export const useSidebarStore = create<TSidebar & TSidebarAction>((set) => ({
  isOpen: false,
  openSidebar: () => set(() => ({ isOpen: true })),
  closeSidebar: () => set(() => ({ isOpen: false })),
}));
