import { create } from "zustand";
import { requestAction } from "../../utils/requestAction";
import { advertRequest } from "../../data/advert/_index";
import { Store } from "./@types";

const PAGE_COUNT = 5;

export const useAdvert = create<Store>((set, get) => ({
  loading: false,
  advertList: [],
  total: 0,
  order: "desc",
  setOrder: (value) => {
    set({ order: value });
  },
  search: "",
  setSearch: (value) => {
    set({ search: value });
  },
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
