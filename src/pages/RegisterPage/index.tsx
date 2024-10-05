import { RegisterForm } from "../../components/user/structures/forms/RegisterForm";
import { Title } from "../../components/shared/fragments/typography/Title";
import Logo from "../../assets/LXLogo.svg";
import { Text } from "../../components/shared/fragments/typography/Text";
import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";

export function RegisterPage() {
  return (
    <>
      <img src={Logo} alt="Logo LX Anúncios" />
      <Title className="title three center" tag="h1">
        Crie sua conta
      </Title>
      <RegisterForm />
      <Text className="text small center" tag="p">
        Já tem uma conta?
      </Text>
      <ButtonLink to={"/login"}>Entrar</ButtonLink>
    </>
  );
}
