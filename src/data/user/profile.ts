import { advertApi } from "../../api/advert.api";
import { IUser } from "../../interfaces/user.interface";

export async function profile(token: string) {
  const { data } = await advertApi.get<IUser>("/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
  });

  return data;
}
