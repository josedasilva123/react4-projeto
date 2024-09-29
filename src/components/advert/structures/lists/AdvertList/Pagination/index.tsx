import { useState } from "react";
import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";

export function Pagination() {
  const [loading, setLoading] = useState(false);

  const search = useAdvert((store) => store.search);
  const order = useAdvert((store) => store.order);
  const getNextAdvertPage = useAdvert((store) => store.getNextAdvertPage);

  function handleClick() {
    getNextAdvertPage(search, order, setLoading);
  }

  return (
    <div>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Carregando..." : "Carregar mais"}
      </Button>
    </div>
  );
}
