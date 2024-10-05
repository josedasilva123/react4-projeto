import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAdvert } from "../../interfaces/advert.interface";
import { requestAction } from "../../utils/requestAction";
import { advertRequest } from "../../data/advert/_index";
import { SingleAdvertContentSection } from "../../components/advert/structures/sections/SingleAdvertContentSection";
import { SingleAdvertAside } from "../../components/advert/structures/sections/SingleAdvertAside";
import { Text } from "../../components/shared/fragments/typography/Text";

export function SingleAdvertPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [advert, setAdvert] = useState<IAdvert | null>(null);

  useEffect(() => {
    requestAction({
      action: async () => {
        const data = await advertRequest.getOne(id as string);
        setAdvert(data);
      },
      setLoading,
    });
  }, [id]);

  return loading ? (
    <Text className="text" tag="p">Carregando...</Text>
  ) : (
    <>
      {advert ? (
        <>
          <SingleAdvertContentSection advert={advert} />
          <SingleAdvertAside advert={advert} />
        </>
      ) : null}
    </>
  );
}
