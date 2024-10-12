import { useState } from "react";
import { PAGE_COUNT, useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import styles from "./style.module.scss";
import { useSearchParams } from "react-router-dom";

export function AdvertPagination() {
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const skip = useAdvert((store) => store.skip);

  const total = useAdvert((store) => store.total);

  const getNextAdvertPage = useAdvert((store) => store.getNextAdvertPage);

  const isVisible = total > skip + PAGE_COUNT;

  function handleClick() {
    const { search, order } = Object.fromEntries(searchParams.entries());

    const getOrder = () => {
      if (order === "asc" || order === "desc") {
        return order;
      }

      return "desc";
    };

    getNextAdvertPage(search, getOrder(), setLoading);
  }

  return isVisible ? (
    <div className={styles.box}>
      <Button className="button small blue" onClick={handleClick} disabled={loading}>
        {loading ? "Carregando..." : "Carregar mais"}
      </Button>
    </div>
  ) : null;
}
