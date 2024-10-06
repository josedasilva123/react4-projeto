import { Link } from "react-router-dom";
import Logo from "../../../../assets/LXLogo.svg";
import { useUser } from "../../../../stores/user/useUser";
import { UserControls } from "./UserControls";
import { ButtonLink } from "../../fragments/buttons/ButtonLink";
import { Container } from "../../fragments/containers/Container";
import { SearchControls } from "../../../advert/structures/lists/AdvertList/SearchControls";

export function Header() {
  const user = useUser((store) => store.user);

  return (
    <header>
      <Container size="big">
        <Link to="/">
          <img src={Logo} alt="Logo LX Anúncios" />
        </Link>
        <SearchControls />
        {user ? (
          <UserControls />
        ) : (
          <div>
            <ButtonLink className="button small blue-outline" to="/login">
              Entrar
            </ButtonLink>
            <ButtonLink className="button small blue" to="/cadastro">
              Cadastrar-se
            </ButtonLink>
          </div>
        )}
      </Container>
    </header>
  );
}
