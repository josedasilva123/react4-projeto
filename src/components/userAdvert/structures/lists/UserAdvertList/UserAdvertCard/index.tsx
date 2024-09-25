import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { useUserAdvert } from "../../../../../../stores/userAdvert/useUserAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";

interface Props {
  advert: IAdvert;
}

export function UserAdvertCard({ advert }: Props) {
  const setEditingAdvert = useUserAdvert((store) => store.setEditingAdvert);
  const setRemovingAdvert = useUserAdvert((store) => store.setRemovingAdvert);

  return (
    <li>
      {advert.image ? (
        <img src={advert.image} alt={`Ilustração ${advert.title}`} />
      ) : null}
      <div>
        <h3>{advert.title}</h3>
        <p>{advert.excerpt}</p>
      </div>
      <div>
        <p>{advert.price}</p>
      </div>
      <div>
        <Button onClick={() => setEditingAdvert(advert)}>Editar</Button>
        <Button onClick={() => setRemovingAdvert(advert)}>Remover</Button>
      </div>
    </li>
  );
}
