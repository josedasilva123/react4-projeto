import { Link } from "react-router-dom";
import Logo from "../../../../assets/LXLogo.svg";
import { useUser } from "../../../../stores/user/useUser";
import { UserControls } from "./UserControls";
import { ButtonLink } from "../../fragments/buttons/ButtonLink";

export function Header() {
  const user = useUser((store) => store.user);

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo LX Anúncios" />
      </Link>
      {user ? (
        <UserControls />
      ) : (
        <div>
          <ButtonLink className="button small blue-outline" to="/login">Entrar</ButtonLink>
          <ButtonLink className="button small blue" to="/cadastro">Cadastrar-se</ButtonLink>
        </div>
      )}
    </header>
  );
}
