import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAdvert } from "../../interfaces/advert.interface";
import { requestAction } from "../../utils/requestAction";
import { advertRequest } from "../../data/advert/_index";

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

  console.log(advert);

  return (
    <>
      <h1>Anúncio (interna)</h1>
    </>
  );
}
