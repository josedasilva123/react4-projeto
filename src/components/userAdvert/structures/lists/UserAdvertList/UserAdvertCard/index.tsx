import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { useUserAdvert } from "../../../../../../stores/userAdvert/useUserAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
import { Price } from "../../../../../shared/fragments/typography/Price";
import { Text } from "../../../../../shared/fragments/typography/Text";
import { Title } from "../../../../../shared/fragments/typography/Title";

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
        <Text className="text" tag="h3">{advert.title}</Text>
        <Text className="text small black50" tag="p">{advert.excerpt}</Text>
      </div>
      <div>
        <Price tag="p">{advert.price}</Price>
      </div>
      <div>
        <Button onClick={() => setEditingAdvert(advert)}>Editar</Button>
        <Button onClick={() => setRemovingAdvert(advert)}>Remover</Button>
      </div>
    </li>
  );
}
