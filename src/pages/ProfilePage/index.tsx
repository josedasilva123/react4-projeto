import { Container } from "../../components/shared/fragments/containers/Container";
import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { FullHeightSection } from "../../components/shared/structures/FullHeightSection";
import { UserPasswordForm } from "../../components/user/structures/forms/UserPasswordForm";
import { useUser } from "../../stores/user/useUser";
import styles from "./style.module.scss";

export function ProfilePage() {
  const user = useUser((store) => store.user);

  return (
    <FullHeightSection tag="section" backgroundColor="gray">
      <Container size="small">
        <div className={`border-box ${styles.box}`}>
          <div>
            <Text className="text" tag="p">
              Boas vindas
            </Text>
            <Title className="title one" tag="h2">
              {user?.name}
            </Title>
            <Text className="text" tag="p">
              {user?.email}
            </Text>
          </div>
          <div>
            <Text className="text" tag="p">
              Você pode alterar sua senha
            </Text>
            <UserPasswordForm />
          </div>
        </div>
      </Container>
    </FullHeightSection>
  );
}
