import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";

export function SearchControls() {
  const search = useAdvert((store) => store.search);
  const setSearch = useAdvert((store) => store.setSearch);

  return (
    <div>
      {search ? (
        <div>
          <p>
            Resultados de busca para: <strong>{search}</strong>
          </p>
          <Button onClick={() => setSearch("")}>Limpar a busca</Button>
        </div>
      ) : null}
    </div>
  );
}
