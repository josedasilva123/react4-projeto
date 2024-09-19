import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import { IRegisterUserData } from "../data/user/register";
import { Dispatch, SetStateAction } from "react";
import { userRequest } from "../data/user/_index";

interface Store {
  user: IUser | null;
  loading: boolean;
  register: (
    formData: IRegisterUserData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
}

export const useUser = create<Store>((set) => ({
  user: null,
  loading: false,
  register: async (formData, setLoading, callback) => {
    try {
        setLoading(true);
        await userRequest.register(formData);
        console.log("Usuário cadastro com sucesso!");
        if(callback) callback();
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  },
}));
