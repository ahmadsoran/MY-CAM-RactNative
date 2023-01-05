import create from "zustand";

type OnboardingVisabilaty = {
  show: boolean;
  setShow(show: boolean): void;
  setps: string;
  setSteps(steps: string): void;
};

export const ShowOnboardingStore = create<OnboardingVisabilaty>((set) => ({
  show: true,
  setShow: (show) => {
    set(() => ({
      show: show,
    }));
  },

  setps: "1",
  setSteps(step) {
    set({ setps: step });
  },
}));
