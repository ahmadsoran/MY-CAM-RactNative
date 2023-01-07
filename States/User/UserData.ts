import create from "zustand";
import { UserRegisterInfo } from "../../@types/UserCredintal";
interface Props {
  UserData: UserRegisterInfo | undefined;
  SetUserData(Data: UserRegisterInfo): void;
}

export const UserData = create<Props>((set) => ({
  UserData: undefined,
  SetUserData(Data) {
    set({
      UserData: Data,
    });
  },
}));
