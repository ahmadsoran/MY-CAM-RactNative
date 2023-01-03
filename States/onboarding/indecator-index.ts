import create from "zustand";

export type indicatorStateType = {
  index: number;
  setIndex(index: number): void;
};

export const IndicatorStore = create<indicatorStateType>((set) => ({
  index: 0,
  setIndex: (index) => {
    set(() => ({
      index,
    }));
  },
}));
