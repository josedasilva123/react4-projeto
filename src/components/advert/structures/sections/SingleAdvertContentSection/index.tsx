import { IAdvert } from "../../../../../interfaces/advert.interface";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";

interface Props {
  advert: IAdvert;
}

export function SingleAdvertContentSection({ advert }: Props) {
  const date = new Date(advert.createdAt);

  return (
    <section>
      <Title tag="h1">{advert.title}</Title>
      <Text tag="p">{date.toDateString()}</Text>
      {advert.image ? (
        <img src={advert.image} alt={`Ilustração ${advert.title}`} />
      ) : null}
      <Text tag="p">{advert.price}</Text>
      <Text tag="p">{advert.excerpt}</Text>
      <Text tag="p">{advert.content}</Text>
    </section>
  );
}
