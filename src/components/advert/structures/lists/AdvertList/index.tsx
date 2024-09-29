import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { AdvertCard } from "./AdvertCard";
import { AdvertControls } from "./AdvertControls";
import { Pagination } from "./Pagination";
import { SearchControls } from "./SearchControls";

export function AdvertList() {
  const loading = useAdvert((store) => store.loading);
  const advertList = useAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <div>
      <SearchControls />
      <AdvertControls />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <ul>
            {advertList.map((advert) => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
          </ul>
          <Pagination />
        </div>
      )}
    </div>
  ) : (
    <p>Nenhum anúncio encontrado.</p>
  );
}
