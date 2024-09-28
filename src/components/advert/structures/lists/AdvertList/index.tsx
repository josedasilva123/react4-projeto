import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { AdvertCard } from "./AdvertCard";

export function AdvertList() {
  const advertList = useAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <ul>
      {advertList.map((advert) => (
        <AdvertCard key={advert.id} advert={advert} />
      ))}
    </ul>
  ) : (
    <p>Nenhum anúncio encontrado.</p>
  );
}
