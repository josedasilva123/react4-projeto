import Logo from "../../../../assets/LXLogo.svg";
import { Container } from "../../fragments/containers/Container";
import { Text } from "../../fragments/typography/Text";
import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="big">
        <div className={styles.box}>
          <img src={Logo} alt="Logo LX Anúncios" />

          <Text className="text small black50" tag="p">
            Todos os direitos reservados
          </Text>
        </div>
      </Container>
    </footer>
  );
}
