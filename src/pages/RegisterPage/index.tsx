import { RegisterForm } from "../../components/user/structures/forms/RegisterForm";
import { Title } from "../../components/shared/fragments/typography/Title";
import Logo from "../../assets/LXLogo.svg";
import { Text } from "../../components/shared/fragments/typography/Text";
import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Container } from "../../components/shared/fragments/containers/Container";
import { FullHeightSection } from "../../components/shared/structures/FullHeightSection";
import styles from "./style.module.scss";

export function RegisterPage() {
  return (
    <FullHeightSection tag="section" backgroundColor="gray">
      <Container size="extra-small">
        <div className={`border-box ${styles.box}`}>
          <img src={Logo} alt="Logo LX Anúncios" />
          <Title className="title three center" tag="h1">
            Crie sua conta
          </Title>
          <RegisterForm />
          <Text className="text small center" tag="p">
            Já tem uma conta?
          </Text>
          <ButtonLink className="button big blue-outline full" to={"/login"}>
            Entrar
          </ButtonLink>
        </div>
      </Container>
    </FullHeightSection>
  );
}
