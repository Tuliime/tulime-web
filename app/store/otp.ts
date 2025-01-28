import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OtpStore = {
  otpCode: string;
  setOtpCode: (otp: string) => void;
  clearOtpCode: () => void;
};

export const useOtpStore = create<OtpStore>()(
  persist(
    (set) => ({
      otpCode: "",

      setOtpCode: (otp: string) =>
        set(() => ({
          otpCode: otp,
        })),
      clearOtpCode: () =>
        set(() => ({
          otpCode: "",
        })),
    }),
    {
      name: "otp-storage",
    }
  )
);
