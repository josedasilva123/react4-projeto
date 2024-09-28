import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { AdvertCard } from "./AdvertCard";
import { AdvertControls } from "./AdvertControls";

export function AdvertList() {
  const loading = useAdvert((store) => store.loading);
  const advertList = useAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <div>
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
