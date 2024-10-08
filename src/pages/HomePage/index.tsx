import { AdvertListLoader } from "../../components/advert/loaders/AdvertListLoader";
import { AdvertList } from "../../components/advert/structures/lists/AdvertList";
import { Container } from "../../components/shared/fragments/containers/Container";
import styles from "./style.module.scss";

export function HomePage() {
  return (
    <AdvertListLoader>
      <section className={styles.section}>
        <Container>
          <AdvertList />
        </Container>
      </section>
    </AdvertListLoader>
  );
}
