import create from "zustand";
import { UserRegisterInfo } from "../../../@types/UserRegisterInput";

interface State extends UserRegisterInfo {
  setName(data: string): void;
  setPassword(data: string): void;
  setConfirmPassword(data: string): void;
  setGendar(data: string): void;
  setBrd(data: string): void;
  setEmail(data: string): void;
  setCity(data: string): void;
  setUsername(data: string): void;
}

export const UserRegisterStore = create<State>((set) => ({
  brd: "",
  city: "",
  confirmPassword: "",
  email: "",
  gendar: "",
  name: "",
  password: "",
  username: "",
  setBrd(data) {
    set({ brd: data });
  },
  setCity(data) {
    set({ city: data });
  },
  setEmail(data) {
    set({ email: data });
  },
  setGendar(data) {
    set({ gendar: data });
  },
  setName(data) {
    set({ name: data });
  },
  setPassword(data) {
    set({ password: data });
  },
  setUsername(data) {
    set({ username: data });
  },
  setConfirmPassword(data) {
    set({ confirmPassword: data });
  },
}));
