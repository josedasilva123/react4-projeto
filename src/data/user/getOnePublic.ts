import { advertApi } from "../../api/advert.api";
import { TPublicUser } from "../../interfaces/user.interface";

export async function getOnePublic(userId: number) {
  const { data } = await advertApi.get<TPublicUser>(`/user/${userId}`);

  return data;
}
