import { Dispatch, SetStateAction } from "react";
import { IAdvert } from "../../interfaces/advert.interface";

export interface Store {
  loading: boolean;
  advertList: IAdvert[];
  total: number;
  order: "asc" | "desc";
  setOrder: (value: "asc" | "desc") => void;
  search: string;
  setSearch: (value: string) => void;
  skip: number;
  getManyAdverts: (search: string, order: "asc" | "desc") => Promise<void>;
  getNextAdvertPage: (
    search: string,
    order: "asc" | "desc",
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
}
