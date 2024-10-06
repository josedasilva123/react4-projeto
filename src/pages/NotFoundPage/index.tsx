import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";

export function NotFoundPage() {
  return (
    <>
      <Title className="title one" tag="h1">
        Não encontrado - 404
      </Title>
      <Text className="text" tag="p">
        Clique no botão a baixo para voltar para página inicial
      </Text>
      <ButtonLink className="button small blue-outline" to={"/"}>
        Voltar para home
      </ButtonLink>
    </>
  );
}
