import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import { Text } from "../../../../../shared/fragments/typography/Text";

export function SearchControls() {
  const search = useAdvert((store) => store.search);
  const setSearch = useAdvert((store) => store.setSearch);

  return (
    <div>
      {search ? (
        <div>
          <Text tag="p">
            Resultados de busca para: <strong>{search}</strong>
          </Text>
          <Button onClick={() => setSearch("")}>Limpar a busca</Button>
        </div>
      ) : null}
    </div>
  );
}
