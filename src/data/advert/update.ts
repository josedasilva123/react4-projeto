import { advertApi } from "../../api/advert.api";
import { IAdvert } from "../../interfaces/advert.interface";

export type TAdvertUpdateData = Partial<
  Omit<IAdvert, "id" | "createdAt" | "updatedAt" | "userId">
>;

export async function update(
  body: TAdvertUpdateData,
  id: number | string,
  token: string
) {
  const { data } = await advertApi.patch<IAdvert>(`/adverts/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
