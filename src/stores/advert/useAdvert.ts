import { create } from "zustand";
import { IAdvert } from "../../interfaces/advert.interface";
import { requestAction } from "../../utils/requestAction";
import { advertApi } from "../../api/advert.api";
import { advertRequest } from "../../data/advert/_index";

interface Store {
  loading: boolean;
  advertList: IAdvert[];
  total: number;
  order: "asc" | "desc";
  search: "";
  skip: number;
  getManyAdverts: (search: string, order: "asc" | "desc") => Promise<void>;
}

export const useAdvert = create<Store>((set) => ({
  loading: false,
  advertList: [],
  total: 0,
  order: "desc",
  search: "",
  skip: 0,
  
  getManyAdverts: async (search, order) => {
    requestAction({
      action: async () => {
        const data = await advertRequest.getMany({
          count: 5,
          order,
          search,
          skip: 0,
        });

        set({ advertList: data.adverts, total: data.count });
      },
      onInit: () => set({ loading: true }),
      onEnd: () => set({ loading: false })
    });
  },
}));
