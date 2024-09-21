import { Link } from "react-router-dom";
import Logo from "../../../../assets/LXLogo.svg";
import { useUser } from "../../../../stores/user/useUser";
import { UserControls } from "./UserControls";

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
          <Link to="/login">Entrar</Link>
          <Link to="/cadastro">Cadastrar-se</Link>
        </div>
      )}
    </header>
  );
}
