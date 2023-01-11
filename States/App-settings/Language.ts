import create from "zustand";

export type languages = "en" | "ar" | "ku";

type StateTypes = {
  lng: languages;
  setLng(lng: languages): void;
};

const UserLanguageStore = create<StateTypes>((set) => ({
  lng: "en",
  setLng(lng) {
    set({
      lng,
    });
  },
}));
export default UserLanguageStore;
