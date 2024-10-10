import { IAdvert } from "../../../../../interfaces/advert.interface";
import { toMoney } from "../../../../../utils/toMoney";
import { Price } from "../../../../shared/fragments/typography/Price";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";
import styles from "./style.module.scss";

interface Props {
  advert: IAdvert;
}

export function SingleAdvertContentSection({ advert }: Props) {
  const date = new Date(advert.createdAt);

  return (
    <section>
      <div className={styles.header}>
        <Title className="title three" tag="h1">
          {advert.title}
        </Title>
        <Text className="text small black50" tag="p">
          {date.toDateString()}
        </Text>
      </div>

      {advert.image ? (
        <img
          className={styles.thumb}
          src={advert.image}
          alt={`Ilustração ${advert.title}`}
        />
      ) : null}

      <div className={styles.content}>
        <Price size="big" tag="p">
          {toMoney(advert.price)}
        </Price>
        <Text className="text small black50" tag="p">
          {advert.excerpt}
        </Text>
        <Text className="text" tag="p">
          {advert.content}
        </Text>
      </div>
    </section>
  );
}
