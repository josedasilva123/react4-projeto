import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Container } from "../../components/shared/fragments/containers/Container";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { FullHeightSection } from "../../components/shared/structures/FullHeightSection";
import { LoginForm } from "../../components/user/structures/forms/LoginForm";
import styles from "./style.module.scss";

export function LoginPage() {
  return (
    <FullHeightSection tag="section" backgroundColor="gray">
      <Container size="extra-small">
        <div className={`border-box ${styles.box}`}>
          <Title className="title three" tag="h1">
            Login
          </Title>
          <LoginForm />
          <Text className="text small center" tag="p">
            ou
          </Text>
          <ButtonLink className="button big blue-outline full" to={"/cadastro"}>
            Cadastre-se
          </ButtonLink>
        </div>
      </Container>
    </FullHeightSection>
  );
}
