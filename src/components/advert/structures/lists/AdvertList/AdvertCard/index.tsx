import { Link } from "react-router-dom";
import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { Text } from "../../../../../shared/fragments/typography/Text";
import { Price } from "../../../../../shared/fragments/typography/Price";
import styles from "./style.module.scss";
import { toMoney } from "../../../../../../utils/toMoney";

interface Props {
  advert: IAdvert;
}

export function AdvertCard({ advert }: Props) {
  return (
    <li className={styles.card}>
      <Link to={`/anuncio/${advert.id}`}>
        {advert.image ? (
          <img src={advert.image} alt={`Ilustração ${advert.title}`} />
        ) : null}

        <div className={styles.content}>
          <div>
            <Text className="text" tag="h2">
              {advert.title}
            </Text>
            <Text className="text small black50" tag="p">
              {advert.excerpt}
            </Text>
          </div>

          <Price tag="p">{toMoney(advert.price)}</Price>
        </div>
      </Link>
    </li>
  );
}
