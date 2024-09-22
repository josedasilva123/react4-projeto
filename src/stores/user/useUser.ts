import { create } from "zustand";
import { userRequest } from "../../data/user/_index";
import { LocalStorageKeys } from "../../enum/LocalStorageKeys.enum";
import { Store } from "./@types";
import { requestAction } from "../../utils/requestAction";

export const useUser = create<Store>((set) => ({
  user: null,
  loading: false,

  profile: async (callback) => {
    requestAction({
      action: async (token) => {
        if(token){
          const data = await userRequest.profile(token);
          set({ user: data });
        }
      },
      onSuccess: callback,
      onError: () => localStorage.removeItem(LocalStorageKeys.TOKEN),
      onInit: () => set({ loading: true }),
      onEnd: () => set({ loading: false })
    });
  },

  register: async (formData, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async () => {
        await userRequest.register(formData);
        console.log("Usuário cadastro com sucesso!");
      },
      onSuccess: callback,
    });
  },

  login: async (formData, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async () => {
        const data = await userRequest.login(formData);
        set({ user: data.user });
        localStorage.setItem(LocalStorageKeys.TOKEN, data.accessToken);
      },
      onSuccess: callback,
    });
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem(LocalStorageKeys.TOKEN);
  },

  updatePassword: async (formData, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async (token) => {
        await userRequest.updatePassword(formData, token as string);
        console.log("Atualização de senha efetuada com sucesso.");
      },
      onSuccess: callback
    })
  },
}));
