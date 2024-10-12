import { useSearchParams } from "react-router-dom";
import { useAdvert } from "../../../../../../stores/advert/useAdvert";
import { Select } from "../../../../../shared/fragments/fields/Select";
import styles from "./style.module.scss";
import { ChangeEvent } from "react";

export function AdvertControls() {
  const loading = useAdvert((store) => store.loading);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e: ChangeEvent<HTMLSelectElement>){
    searchParams.set("order", e.target.value);
    setSearchParams(searchParams);
  }

  const searchValue = searchParams.get("order");

  return (
    <div className={styles.box}>  
      <Select
        value={searchValue ? searchValue : "desc"}
        onChange={handleChange}
        disabled={loading}
      >
        <option value="desc">Mais recente</option>
        <option value="asc">Mais antigo</option>
      </Select>
    </div>
  );
}
