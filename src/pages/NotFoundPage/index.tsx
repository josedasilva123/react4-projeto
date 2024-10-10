import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Container } from "../../components/shared/fragments/containers/Container";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { FullHeightSection } from "../../components/shared/structures/FullHeightSection";
import styles from "./style.module.scss";

export function NotFoundPage() {
  return (
    <FullHeightSection tag="section" backgroundColor="gray">
      <Container size="small">
        <div className={styles.box}>
          <Title className="title one center" tag="h1">
            Não encontrado - 404
          </Title>
          <Text className="text center" tag="p">
            Clique no botão a baixo para voltar para página inicial
          </Text>
          <ButtonLink className="button big blue-outline" to={"/"}>
            Voltar para home
          </ButtonLink>
        </div>
      </Container>
    </FullHeightSection>
  );
}
