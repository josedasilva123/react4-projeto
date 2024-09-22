import { Dispatch, SetStateAction } from "react";
import { TAdvertCreateData } from "../../data/advert/create";
import { TAdvertUpdateData } from "../../data/advert/update";
import { IAdvert } from "../../interfaces/advert.interface";

export interface Store {
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
  ) => Promise<void>;
}
