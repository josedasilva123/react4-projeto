import { useEffect } from "react";
import { useAdvert } from "../../../../stores/advert/useAdvert";

interface Props{
    children: React.ReactNode;
}

export function AdvertListLoader({ children }: Props){
    const search = useAdvert(store => store.search);
    const order = useAdvert(store => store.order);
    const getManyAdverts = useAdvert(store => store.getManyAdverts);

    useEffect(() => {
        getManyAdverts(search, order);
    }, [getManyAdverts, search, order]);

    return(
        <>{children}</>
    )
}