import { create } from "zustand";
import { IAdvert } from "../../interfaces/advert.interface";
import { TAdvertCreateData } from "../../data/advert/create";
import { Dispatch, SetStateAction } from "react";
import { advertRequest } from "../../data/advert/_index";
import { LocalStorageKeys } from "../../enum/LocalStorageKeys.enum";

interface Store {
  advertList: IAdvert[];
  loading: boolean;
  createAdvert: (
    formData: TAdvertCreateData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
  getAdvertList: (callback?: () => void) => Promise<void>;
}

export const useUserAdvert = create<Store>((set) => ({
  advertList: [],
  loading: false,

  createAdvert: async (formData, setLoading, callback) => {
    try {
      setLoading(true);
      const token = localStorage.getItem(LocalStorageKeys.TOKEN);
      const data = await advertRequest.create(formData, token as string);
      set(({ advertList }) => ({ advertList: [...advertList, data] }));
      if (callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
  
  getAdvertList: async (callback) => {
    try {
        set({ loading: true });
        const token = localStorage.getItem(LocalStorageKeys.TOKEN);
        const data = await advertRequest.getManyFromUser(token as string);
        set({ advertList: data });
        if(callback) callback();
    } catch (error) {
        console.log(error);
    } finally {
        set({ loading: false });
    }
  }
}));
