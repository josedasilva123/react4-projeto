import { create } from "zustand";
import { advertRequest } from "../../data/advert/_index";
import { requestAction } from "../../utils/requestAction";
import { Store } from "./@types";

export const useUserAdvert = create<Store>((set) => ({
  advertList: [],
  loading: false,

  createAdvert: async (formData, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async (token) => {
        const data = await advertRequest.create(formData, token as string);
        set(({ advertList }) => ({ advertList: [...advertList, data] }));
      },
      onSuccess: callback,
    });
  },

  getAdvertList: async (callback) => {
    requestAction({
      action: async (token) => {
        const data = await advertRequest.getManyFromUser(token as string);
        set({ advertList: data });
      },
      onSuccess: callback,
      onInit: () => set({ loading: true }),
      onEnd: () => set({ loading: false }),
    });
  },

  updateAdvert: async (formData, advertId, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async (token) => {
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
      },
      onSuccess: callback,
    });
  },

  removeAdvert: async (advertId, setLoading, callback) => {
    requestAction({
      setLoading,
      action: async (token) => {
        await advertRequest.remove(advertId, token as string);
      },
      onSuccess: callback,
    });
  },
}));
