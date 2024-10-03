import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { useUserAdvert } from "../../../../../../stores/userAdvert/useUserAdvert";
import { Button } from "../../../../../shared/fragments/buttons/Button";
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
        <Title tag="h3">{advert.title}</Title>
        <Text tag="p">{advert.excerpt}</Text>
      </div>
      <div>
        <Text tag="p">{advert.price}</Text>
      </div>
      <div>
        <Button onClick={() => setEditingAdvert(advert)}>Editar</Button>
        <Button onClick={() => setRemovingAdvert(advert)}>Remover</Button>
      </div>
    </li>
  );
}
