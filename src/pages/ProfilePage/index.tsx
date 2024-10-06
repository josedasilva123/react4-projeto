import { Container } from "../../components/shared/fragments/containers/Container";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { UserPasswordForm } from "../../components/user/structures/forms/UserPasswordForm";
import { useUser } from "../../stores/user/useUser";

export function ProfilePage() {
  const user = useUser((store) => store.user);

  return (
    <Container size="small">
      <Text className="text" tag="p">
        Boas vindas
      </Text>
      <Title className="title one" tag="h2">
        {user?.name}
      </Title>
      <Text className="text" tag="p">
        {user?.email}
      </Text>

      <Text className="text" tag="p">
        Você pode alterar sua senha
      </Text>
      <UserPasswordForm />
    </Container>
  );
}
