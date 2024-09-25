import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";
import { UserAdvertCard } from "./UserAdvertCard";

export function UserAdvertList() {
  const advertList = useUserAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <ul>
      {advertList.map((advert) => (
        <UserAdvertCard key={advert.id} advert={advert} />
      ))}
    </ul>
  ) : (
    <p>Cadastre o seu primeiro anúncio.</p>
  );
}
