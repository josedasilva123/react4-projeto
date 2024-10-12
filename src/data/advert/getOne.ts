import { advertApi } from "../../api/advert.api";
import { IAdvert } from "../../interfaces/advert.interface";

export async function getOne(id: number | string) {
  const { data } = await advertApi.get<IAdvert>(`/adverts/${id}`);

  return data;
}
