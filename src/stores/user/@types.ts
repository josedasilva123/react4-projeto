import { Dispatch, SetStateAction } from "react";
import { ILoginUserData } from "../../data/user/login";
import { IRegisterUserData } from "../../data/user/register";
import { IUpdateUserPasswordData } from "../../data/user/updatePassword";
import { IUser } from "../../interfaces/user.interface";

export interface Store {
  user: IUser | null;
  loading: boolean;
  profile: (callback?: () => void) => Promise<void>;
  register: (
    formData: IRegisterUserData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
  login: (
    formData: ILoginUserData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
  logout: () => void;
  updatePassword: (
    formData: IUpdateUserPasswordData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
}
