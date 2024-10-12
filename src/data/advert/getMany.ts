/*
count	Quantidade de itens desejados na página
skip	Quantidade de itens a ser pulado
search	Chave de busca
order	'desc' ou 'asc'. Padrão 'asc'
*/

import { advertApi } from "../../api/advert.api";
import { IAdvert } from "../../interfaces/advert.interface";

interface Params {
  count?: number | string;
  skip?: number | string;
  search?: string;
  order?: "asc" | "desc";
}

interface Response {
  count: number;
  adverts: IAdvert[];
}

export async function getMany(params: Params) {
  const { data } = await advertApi.get<Response>("/adverts", {
    params,
  });

  return data;
}
