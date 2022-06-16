import { atom } from "recoil";

export const userAuthenAtom = atom({
  key: "userAuthenAtom",
  default: {
    fullName: localStorage.getItem("fullname"),
    user: localStorage.getItem("user"),
    email: localStorage.getItem("email"),
  },
});
