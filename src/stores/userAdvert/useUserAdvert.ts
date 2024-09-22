import { create } from "zustand";
import { IAdvert } from "../../interfaces/advert.interface";
import { TAdvertCreateData } from "../../data/advert/create";
import { Dispatch, SetStateAction } from "react";
import { advertRequest } from "../../data/advert/_index";
import { LocalStorageKeys } from "../../enum/LocalStorageKeys.enum";
import { TAdvertUpdateData } from "../../data/advert/update";

interface Store {
  advertList: IAdvert[];
  loading: boolean;
  createAdvert: (
    formData: TAdvertCreateData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
  getAdvertList: (callback?: () => void) => Promise<void>;
  updateAdvert: (
    formData: TAdvertUpdateData,
    advertId: string | number,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  ) => Promise<void>;
  removeAdvert: (
    advertId: string | number,
    setLoading: Dispatch<SetStateAction<boolean>>,
    callback?: () => void
  )
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
      if (callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  updateAdvert: async (formData, advertId, setLoading, callback) => {
    try {
      setLoading(true);
      const token = localStorage.getItem(LocalStorageKeys.TOKEN);
      const data = await advertRequest.update(
        formData,
        advertId,
        token as string
      );
      set(({ advertList }) => ({
        advertList: advertList.map((advert) => {
          if (advert.id === advertId) {
            return { ...advert, data };
          } else {
            return advert;
          }
        }),
      }));
      if(callback) callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },

  removeAdvert: async (advertId, setLoading, callback) => {
    try {
        setLoading(true);
        const token = localStorage.getItem(LocalStorageKeys.TOKEN);
        await advertRequest.remove(advertId, token as string);
        if(callback) callback();
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  }
}));
