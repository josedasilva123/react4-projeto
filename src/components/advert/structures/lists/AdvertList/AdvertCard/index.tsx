import { Link } from "react-router-dom";
import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { Text } from "../../../../../shared/fragments/typography/Text";
import { Price } from "../../../../../shared/fragments/typography/Price";

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
          <Text className="text" tag="h2">{advert.title}</Text>
          <Text className="text small black50" tag="p">
            {advert.excerpt}
          </Text>
        </div>

        <Price tag="p">{advert.price}</Price>
      </Link>
    </li>
  );
}
