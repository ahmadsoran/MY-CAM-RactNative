import create from "zustand";

type OnboardingVisabilaty = {
  show: boolean;
  setShow(show: boolean): void;
};

export const ShowOnboardingStore = create<OnboardingVisabilaty>((set) => ({
  show: true,
  setShow: (show) => {
    set(() => ({
      show: show,
    }));
  },
}));
