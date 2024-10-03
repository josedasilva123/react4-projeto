import { Link } from "react-router-dom";
import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { Text } from "../../../../../shared/fragments/typography/Text";
import { Title } from "../../../../../shared/fragments/typography/Title";

interface Props {
  advert: IAdvert;
}

export function AdvertCard({ advert }: Props) {
  return (
    <li>
      <Link to={`/anuncio/${advert.id}`}>
        {advert.image ? (
          <img src={advert.image} alt={`Ilustração ${advert.title}`} />
        ) : null}

        <div>
          <Title tag="h2">{advert.title}</Title>
          <Text tag="p">{advert.excerpt}</Text>
        </div>

        <Text tag="p">{advert.price}</Text>
      </Link>
    </li>
  );
}
