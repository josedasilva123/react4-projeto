import { Link } from "react-router-dom";
import { Button } from "../../../fragments/buttons/Button";
import { useUser } from "../../../../../stores/user/useUser";

export function UserControls() {
  const user = useUser((store) => store.user);
  const logout = useUser((store) => store.logout);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/meus-anuncios">meus anúncios</Link>
          </li>
        </ul>
      </nav>
      <div>
        <span>{user?.name.charAt(0)}</span>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
      <div>
        <Link to="/meu-perfil">Configurações</Link>
        <Button onClick={logout}>Deslogar</Button>
      </div>
    </div>
  );
}
