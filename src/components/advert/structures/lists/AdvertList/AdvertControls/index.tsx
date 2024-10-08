import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Select } from "../../../../../shared/fragments/fields/Select";
import styles from "./style.module.scss";

export function AdvertControls() {
  const loading = useAdvert((store) => store.loading);
  const order = useAdvert((store) => store.order);
  const setOrder = useAdvert((store) => store.setOrder);

  return (
    <div className={styles.box}>  
      <Select
        value={order}
        onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
        disabled={loading}
      >
        <option value="desc">Mais recente</option>
        <option value="asc">Mais antigo</option>
      </Select>
    </div>
  );
}
