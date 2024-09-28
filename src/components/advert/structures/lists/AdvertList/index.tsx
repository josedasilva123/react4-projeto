import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { AdvertCard } from "./AdvertCard";
import { AdvertControls } from "./AdvertControls";
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
        <ul>
          {advertList.map((advert) => (
            <AdvertCard key={advert.id} advert={advert} />
          ))}
        </ul>
      )}
    </div>
  ) : (
    <p>Nenhum anúncio encontrado.</p>
  );
}
