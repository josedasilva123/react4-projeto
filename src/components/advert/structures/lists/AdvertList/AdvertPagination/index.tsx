import { useState } from "react";
import { PAGE_COUNT, useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import styles from "./style.module.scss";

export function AdvertPagination() {
  const [loading, setLoading] = useState(false);

  const search = useAdvert((store) => store.search);

  const order = useAdvert((store) => store.order);

  const skip = useAdvert((store) => store.skip);

  const total = useAdvert((store) => store.total);

  const getNextAdvertPage = useAdvert((store) => store.getNextAdvertPage);

  const isVisible = total > skip + PAGE_COUNT;

  function handleClick() {
    getNextAdvertPage(search, order, setLoading);
  }

  return isVisible ? (
    <div className={styles.box}>
      <Button className="button small blue" onClick={handleClick} disabled={loading}>
        {loading ? "Carregando..." : "Carregar mais"}
      </Button>
    </div>
  ) : null;
}
