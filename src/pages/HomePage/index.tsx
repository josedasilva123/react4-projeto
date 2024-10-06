import { AdvertListLoader } from "../../components/advert/loaders/AdvertListLoader";
import { AdvertList } from "../../components/advert/structures/lists/AdvertList";
import { Container } from "../../components/shared/fragments/containers/Container";

export function HomePage() {
  return (
    <AdvertListLoader>
      <Container>
        <AdvertList />
      </Container>
    </AdvertListLoader>
  );
}
