import { advertApi } from "../../api/advert.api";
import { IAdvert } from "../../interfaces/advert.interface";

export async function getManyFromUser(token: string) {
  const { data } = await advertApi.get<IAdvert[]>("/adverts/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
