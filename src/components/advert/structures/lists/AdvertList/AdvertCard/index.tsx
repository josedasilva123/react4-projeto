import { Link } from "react-router-dom";
import { IAdvert } from "../../../../../../interfaces/advert.interface";

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
          <h2>{advert.title}</h2>
          <p>{advert.excerpt}</p>
        </div>

        <p>{advert.price}</p>
      </Link>
    </li>
  );
}
