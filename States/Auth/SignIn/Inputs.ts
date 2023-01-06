import create from "zustand";
import { UserSginInInfo } from "../../../@types/UserCredintal";

interface States extends UserSginInInfo {
  setPassword(password: string): void;
  setUsername(username: string): void;
}

const UserSignInStore = create<States>((set) => ({
  password: "",
  username: "",
  setPassword(password) {
    set({ password });
  },
  setUsername(username) {
    set({ username });
  },
}));

export default UserSignInStore;
