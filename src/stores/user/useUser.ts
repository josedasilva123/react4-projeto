import { create } from "zustand";
import { userRequest } from "../../data/user/_index";
import { LocalStorageKeys } from "../../enum/LocalStorageKeys.enum";
import { Store } from "./@types";

export const useUser = create<Store>((set) => ({
  user: null,
  loading: false,

  profile: async (callback) => {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);

    if (token) {
      try {
        set({ loading: true });
        const data = await userRequest.profile(token);
        set({ user: data });
        if(callback) callback();
      } catch (error) {
        console.log(error);
      } finally {
        set({ loading: false });
      }
    }
  },

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

  updatePassword: async (formData, setLoading, callback) => {
    try {
        setLoading(true);
        const token = localStorage.getItem(LocalStorageKeys.TOKEN);
        await userRequest.updatePassword(formData, token as string);
        console.log("Atualização de senha efetuada com sucesso.");
        if(callback) callback();
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  }
}));
