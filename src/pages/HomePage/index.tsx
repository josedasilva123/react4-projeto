import { AdvertListLoader } from "../../components/advert/loaders/AdvertListLoader";
import { AdvertList } from "../../components/advert/structures/lists/AdvertList";

export function HomePage() {
  return (
    <AdvertListLoader>
      <AdvertList />
    </AdvertListLoader>
  );
}
