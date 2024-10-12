import { AdvertListLoader } from "../../components/advert/loaders/AdvertListLoader";
import { AdvertList } from "../../components/advert/structures/lists/AdvertList";
import { Container } from "../../components/shared/fragments/containers/Container";
import { FullHeightSection } from "../../components/shared/structures/FullHeightSection";

export function HomePage() {
  return (
    <AdvertListLoader>
      <FullHeightSection tag="section" backgroundColor="white">
        <Container>
          <AdvertList />
        </Container>
      </FullHeightSection>
    </AdvertListLoader>
  );
}
