import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { Text } from "../../../../shared/fragments/typography/Text";
import { AdvertCard } from "./AdvertCard";
import { AdvertControls } from "./AdvertControls";
import { AdvertPagination } from "./AdvertPagination";
import { SearchControls } from "./SearchControls";

export function AdvertList() {
  const loading = useAdvert((store) => store.loading);
  const advertList = useAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <div>
      <SearchControls />
      <AdvertControls />
      {loading ? (
        <Text tag="p">Carregando...</Text>
      ) : (
        <div>
          <ul>
            {advertList.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </ul>
          <AdvertPagination />
        </div>
      )}
    </div>
  ) : (
    <Text tag="p">Nenhum anúncio encontrado.</Text>
  );
}
