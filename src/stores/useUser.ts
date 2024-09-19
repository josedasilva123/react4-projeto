import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import { IRegisterUserData } from "../data/user/register";
import { Dispatch, SetStateAction } from "react";
import { userRequest } from "../data/user/_index";
import { ILoginUserData } from "../data/user/login";
import { LocalStorageKeys } from "../enum/LocalStorageKeys.enum";

interface Store {
  user: IUser | null;
  loading: boolean;
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
}

export const useUser = create<Store>((set) => ({
  user: null,
  loading: false,
  register: async (formData, setLoading, callback) => {
    try {
      setLoading(true);
      await userRequest.register(formData);
      console.log("Usuário cadastro com sucesso!");
      if (callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
  login: async (formData, setLoading, callback) => {
    try {
      setLoading(true);
      const data = await userRequest.login(formData);
      set({ user: data.user });
      localStorage.setItem(LocalStorageKeys.TOKEN, data.accessToken);
      if (callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem(LocalStorageKeys.TOKEN);
  },
}));
