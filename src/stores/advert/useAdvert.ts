import { create } from "zustand";
import { IAdvert } from "../../interfaces/advert.interface";
import { requestAction } from "../../utils/requestAction";
import { advertRequest } from "../../data/advert/_index";
import { Dispatch, SetStateAction } from "react";

interface Store {
  loading: boolean;
  advertList: IAdvert[];
  total: number;
  order: "asc" | "desc";
  search: "";
  skip: number;
  getManyAdverts: (search: string, order: "asc" | "desc") => Promise<void>;
  getNextAdvertPage: (
    search: string,
    order: "asc" | "desc",
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
}

const PAGE_COUNT = 5;

export const useAdvert = create<Store>((set, get) => ({
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
          count: PAGE_COUNT,
          order,
          search,
          skip: 0,
        });

        set({ skip: 0, advertList: data.adverts, total: data.count });
      },
      onInit: () => set({ loading: true }),
      onEnd: () => set({ loading: false }),
    });
  },

  getNextAdvertPage: async (search, order, setLoading) => {
    requestAction({
      action: async () => {
        const { skip } = get();

        const newSkip = skip + PAGE_COUNT;

        const data = await advertRequest.getMany({
          count: PAGE_COUNT,
          order,
          search,
          skip: newSkip,
        });

        set(({ advertList }) => ({
          skip: newSkip,
          advertList: [...advertList, ...data.adverts],
          total: data.count,
        }));
      },
      setLoading,
    });
  },
}));
