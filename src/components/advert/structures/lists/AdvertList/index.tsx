import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { Text } from "../../../../shared/fragments/typography/Text";
import { AdvertCard } from "./AdvertCard";
import { AdvertControls } from "./AdvertControls";
import { AdvertPagination } from "./AdvertPagination";
import { SearchControls } from "./SearchControls";
import styles from "./style.module.scss";

export function AdvertList() {
  const loading = useAdvert((store) => store.loading);
  const advertList = useAdvert((store) => store.advertList);

  return (
    <div>
      <SearchControls />
      {loading ? (
        <Text className="text" tag="p">
          Carregando...
        </Text>
      ) : (
        <div>
          {advertList.length > 0 ? (
            <>
              <AdvertControls />
              <ul className={styles.list}>
                {advertList.map((advert) => (
                  <AdvertCard key={advert.id} advert={advert} />
                ))}
              </ul>
              <AdvertPagination />
            </>
          ) : (
            <Text className="text" tag="p">
              Nenhum anúncio encontrado.
            </Text>
          )}
        </div>
      )}
    </div>
  );
}
