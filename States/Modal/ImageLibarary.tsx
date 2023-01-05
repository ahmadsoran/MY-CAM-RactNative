import create from "zustand";
interface Props {
  imageUrlOne: string;
  setImageUrlOne(url: string): void;
  imageUrlTwo: string;
  setImageUrlTwo(url: string): void;
  imageUrlThree: string;
  setImageUrlThree(url: string): void;
  imageForCard: string;
  setImageForCard(card: string): void;
}

export const imageLibraryStore = create<Props>((set) => ({
  imageUrlOne: "",
  setImageUrlOne(url) {
    set({
      imageUrlOne: url,
    });
  },
  imageUrlTwo: "",
  setImageUrlTwo(url) {
    set({
      imageUrlTwo: url,
    });
  },
  imageUrlThree: "",
  setImageUrlThree(url) {
    set({
      imageUrlThree: url,
    });
  },
  imageForCard: "",
  setImageForCard(card) {
    set({ imageForCard: card });
  },
}));
