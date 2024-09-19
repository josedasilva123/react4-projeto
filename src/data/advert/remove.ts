import { advertApi } from "../../api/advert.api";

export async function remove(id: number | string, token: string) {
  await advertApi.delete(`/adverts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
