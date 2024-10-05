import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { LoginForm } from "../../components/user/structures/forms/LoginForm";

export function LoginPage() {
  return (
    <>
      <Title className="title three" tag="h1">
        Login
      </Title>
      <LoginForm />
      <Text className="text small center" tag="p">
        ou
      </Text>
      <ButtonLink to={"/cadastro"}>Cadastre-se</ButtonLink>
    </>
  );
}
