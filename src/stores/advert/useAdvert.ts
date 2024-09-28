import { create } from "zustand";
import { IAdvert } from "../../interfaces/advert.interface";

interface Store{
    loading: boolean;
    advertList: IAdvert[];
    total: number;
    order: "asc" | "desc";
    search: "",
    skip: number;
}

export const useAdvert = create<Store>((set) => ({
    loading: false,
    advertList: [],
    total: 0,
    order: "desc",
    search: "",
    skip: 0,
}));