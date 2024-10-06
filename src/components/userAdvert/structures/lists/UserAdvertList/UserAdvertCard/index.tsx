import { IAdvert } from "../../../../../../interfaces/advert.interface";
import { useUserAdvert } from "../../../../../../stores/userAdvert/useUserAdvert";
import { Icon } from "../../../../../shared/fragments/icons/Icon";
import { Price } from "../../../../../shared/fragments/typography/Price";
import { Text } from "../../../../../shared/fragments/typography/Text";

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
        <Text className="text" tag="h3">
          {advert.title}
        </Text>
        <Text className="text small black50" tag="p">
          {advert.excerpt}
        </Text>
      </div>
      <div>
        <Price tag="p">{advert.price}</Price>
      </div>
      <div>
        <button
          onClick={() => setEditingAdvert(advert)}
          title="Editar anúncio"
          aria-label="Editar anúncio"
        >
          <Icon color="blue" icon="edit" />
        </button>
        <button
          onClick={() => setRemovingAdvert(advert)}
          title="Remover aníncio"
          aria-label="Remover anúncio"
        >
          <Icon color="blue" icon="delete" />
        </button>
      </div>
    </li>
  );
}
