import { useSearchParams } from "react-router-dom";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import { Text } from "../../../../../shared/fragments/typography/Text";
import styles from "./style.module.scss";
import { useAdvert } from "../../../../../../stores/advert/useAdvert";

export function SearchControls() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = Object.fromEntries(searchParams.entries());
  const total = useAdvert((store) => store.total);

  function clearSearch() {
    searchParams.delete("search");
    setSearchParams(searchParams);
  }

  return (
    <div>
      {search ? (
        <div className={styles.box}>
          <Text className="text" tag="p">
            Resultados de busca para:{" "}
            <strong>
              {search} ({total} {total === 1 ? "encontrado" : "encontrados"})
            </strong>
          </Text>
          <Button className="button small blue-outline" onClick={clearSearch}>
            Limpar a busca
          </Button>
        </div>
      ) : null}
    </div>
  );
}
