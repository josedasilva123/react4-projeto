import { useEffect, useState } from "react"
import { TPublicUser } from "../../../../../interfaces/user.interface";
import { IAdvert } from "../../../../../interfaces/advert.interface";
import { requestAction } from "../../../../../utils/requestAction";
import { userRequest } from "../../../../../data/user/_index";

interface Props{
    advert: IAdvert;
}

export function SingleAdvertAside({ advert }: Props){
    const [loading, setLoading] = useState(false);
    const [publicUser, setPublicUser] = useState<TPublicUser | null>(null);

    useEffect(() => {
        requestAction({
            action: async () => {
                const data = await userRequest.getOnePublic(advert.userId);
                setPublicUser(data);
            },
            setLoading
        });
    }, [advert.userId]);

    console.log(publicUser);

    return(
        <aside>

        </aside>
    )
}