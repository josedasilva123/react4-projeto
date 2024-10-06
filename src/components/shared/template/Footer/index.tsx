import Logo from "../../../../assets/LXLogo.svg";
import { Text } from "../../fragments/typography/Text";

export function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo LX Anúncios" />

      <Text className="text small black50" tag="p">
        Todos os direitos reservados
      </Text>
    </footer>
  );
}
