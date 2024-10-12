import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";
import { Text } from "../../../../shared/fragments/typography/Text";
import { UserAdvertCard } from "./UserAdvertCard";
import styles from "./style.module.scss";

export function UserAdvertList() {
  const advertList = useUserAdvert((store) => store.advertList);

  return advertList.length > 0 ? (
    <ul className={styles.list}>
      {advertList.map((advert) => (
        <UserAdvertCard key={advert.id} advert={advert} />
      ))}
    </ul>
  ) : (
    <Text className="text" tag="p">Cadastre o seu primeiro anúncio.</Text>
  );
}
