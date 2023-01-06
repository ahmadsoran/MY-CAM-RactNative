import create from "zustand";

type AccountOptions = "sign-in" | "sign-up";

interface UserAccountStatus {
  status: AccountOptions;
  setStatus(status: AccountOptions): void;
}
const UserAccStatusStore = create<UserAccountStatus>((set) => ({
  status: "sign-in",
  setStatus(status) {
    set({
      status,
    });
  },
}));

export default UserAccStatusStore;
