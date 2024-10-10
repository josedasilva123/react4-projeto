import { useEffect } from "react";
import { useAdvert } from "../../../../stores/advert/useAdvert";
import { useSearchParams } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function AdvertListLoader({ children }: Props) {
  const [searchParams] = useSearchParams();
  const getManyAdverts = useAdvert((store) => store.getManyAdverts);

  useEffect(() => {
    const { search, order } = Object.fromEntries(searchParams.entries());

    const getOrder = () => {
      if (order === "asc" || order === "desc") {
        return order;
      }

      return "desc";
    };

    getManyAdverts(search ? search : "", getOrder());
  }, [getManyAdverts, searchParams]);

  return <>{children}</>;
}
