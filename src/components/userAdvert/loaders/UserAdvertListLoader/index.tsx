import { useEffect } from "react";
import { useUserAdvert } from "../../../../stores/userAdvert/useUserAdvert";

interface Props {
  children: React.ReactNode;
}

export function UserAdvertListLoader({ children }: Props) {
  const getAdvertList = useUserAdvert((store) => store.getAdvertList);

  useEffect(() => {
    getAdvertList();
  }, [getAdvertList]);

  return <>{children}</>;
}
