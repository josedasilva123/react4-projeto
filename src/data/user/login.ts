import { advertApi } from "../../api/advert.api";
import { IUser } from "../../interfaces/user.interface";

export interface ILoginUserData {
  email: string;
  password: string;
}

interface Response {
  accessToken: string;
  user: IUser;
}

export async function login(body: ILoginUserData) {
  const { data } = await advertApi.post<Response>("/login", body);

  return data;
}
