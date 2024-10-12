import { advertApi } from "../../api/advert.api";

export interface IUpdateUserPasswordData {
  oldPassword: string;
  newPassword: string;
}

export async function updatePassword(
  body: IUpdateUserPasswordData,
  token: string
) {
  const { data } = await advertApi.patch<string>("/user/password", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
