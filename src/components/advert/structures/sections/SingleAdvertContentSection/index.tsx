import { IAdvert } from "../../../../../interfaces/advert.interface";
import { Price } from "../../../../shared/fragments/typography/Price";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";

interface Props {
  advert: IAdvert;
}

export function SingleAdvertContentSection({ advert }: Props) {
  const date = new Date(advert.createdAt);

  return (
    <section>
      <Title className="title three" tag="h1">
        {advert.title}
      </Title>
      <Text className="text small black50" tag="p">
        {date.toDateString()}
      </Text>
      {advert.image ? (
        <img src={advert.image} alt={`Ilustração ${advert.title}`} />
      ) : null}
      <Price size="big" tag="p">
        {advert.price}
      </Price>
      <Text className="text small black50" tag="p">
        {advert.excerpt}
      </Text>
      <Text className="text" tag="p">
        {advert.content}
      </Text>
    </section>
  );
}
