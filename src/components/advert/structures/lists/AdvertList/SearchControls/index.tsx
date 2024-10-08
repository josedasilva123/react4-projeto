import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import { Text } from "../../../../../shared/fragments/typography/Text";
import styles from "./style.module.scss";

export function SearchControls() {
  const search = useAdvert((store) => store.search);
  const setSearch = useAdvert((store) => store.setSearch);

  return (
    <div>
      {search ? (
        <div className={styles.box}>
          <Text className="text" tag="p">
            Resultados de busca para: <strong>{search}</strong>
          </Text>
          <Button className="button small blue-outline" onClick={() => setSearch("")}>Limpar a busca</Button>
        </div>
      ) : null}
    </div>
  );
}
