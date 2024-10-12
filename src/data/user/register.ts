import { advertApi } from "../../api/advert.api";
import { IUser } from "../../interfaces/user.interface";

export interface IRegisterUserData {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
}

export async function register(body: IRegisterUserData) {
  const { data } = await advertApi.post<IUser>("/register", body);

  return data;
}
