import { advertApi } from "../../api/advert.api";
import { IAdvert } from "../../interfaces/advert.interface";

export type TAdvertCreateData = Omit<
  IAdvert,
  "id" | "createdAt" | "updatedAt" | "userId"
>;

export async function create(body: TAdvertCreateData, token: string) {
  const { data } = await advertApi.post<IAdvert>("/adverts", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
