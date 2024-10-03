import { useEffect } from "react";
import { useUser } from "../../../../stores/user/useUser";
import { Text } from "../../../shared/fragments/typography/Text";

interface Props {
  children: React.ReactNode;
}

export function ProfileLoader({ children }: Props) {
  const loading = useUser((store) => store.loading);
  const profile = useUser((store) => store.profile);

  useEffect(() => {
    profile();
  }, [profile]);

  return loading ? <Text tag="p">Carregando...</Text> : <>{children}</>;
}
