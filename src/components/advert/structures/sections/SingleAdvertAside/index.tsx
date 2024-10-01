import { useEffect, useState } from "react";
import { TPublicUser } from "../../../../../interfaces/user.interface";
import { IAdvert } from "../../../../../interfaces/advert.interface";
import { requestAction } from "../../../../../utils/requestAction";
import { userRequest } from "../../../../../data/user/_index";
import { ButtonAnchor } from "../../../../shared/fragments/buttons/ButtonAnchor";

interface Props {
  advert: IAdvert;
}

export function SingleAdvertAside({ advert }: Props) {
  const [loading, setLoading] = useState(false);
  const [publicUser, setPublicUser] = useState<TPublicUser | null>(null);

  useEffect(() => {
    requestAction({
      action: async () => {
        const data = await userRequest.getOnePublic(advert.userId);
        setPublicUser(data);
      },
      setLoading,
    });
  }, [advert.userId]);

  const message = encodeURIComponent(
    `Olá, eu estou interessado no seu anúncio ${advert.title} 
    publicado na plataforma LX anúncios.`
  );

  const whatsappLink = `https://wa.me/${publicUser?.whatsapp}?text=${message}`;

  return loading ? (
    <p>Carregando...</p>
  ) : (
    <aside>
      <div>
        <h2>Entre em contato</h2>
        <p>Clique aqui e fale agora com o anunciante</p>
        <ButtonAnchor href={whatsappLink} target="_blank">
          Fale agora via Whatsapp
        </ButtonAnchor>
      </div>

      <div>
        <h2>Sobre o anunciante</h2>
        <p>
          <strong>Nome:</strong> {publicUser?.name}
        </p>
      </div>
    </aside>
  );
}
