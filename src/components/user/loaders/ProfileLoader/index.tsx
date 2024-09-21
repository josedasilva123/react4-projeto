import { useEffect } from "react";
import { useUser } from "../../../../stores/user/useUser";

interface Props {
  children: React.ReactNode;
}

export function ProfileLoader({ children }: Props) {
  const loading = useUser((store) => store.loading);
  const profile = useUser((store) => store.profile);

  useEffect(() => {
    profile();
  }, [profile]);

  return loading ? <p>Carregando...</p> : <>{children}</>;
}
