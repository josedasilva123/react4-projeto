import { Link } from "react-router-dom";
import { useUser } from "../../../../../stores/user/useUser";
import { Text } from "../../../fragments/typography/Text";
import { Icon } from "../../../fragments/icons/Icon";

export function UserControls() {
  const user = useUser((store) => store.user);
  const logout = useUser((store) => store.logout);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/meus-anuncios">
              <Text className="text small" tag="span">
                meus anúncios
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <span>{user?.name.charAt(0)}</span>
        <Text className="text small" tag="p">
          {user?.name}
        </Text>
        <Text className="text small" tag="p">
          {user?.email}
        </Text>
      </div>
      <div>
        <Link to="/meu-perfil" title="Configurações" aria-label="Configurações">
          <Icon color="blue" icon="settings" />
        </Link>
        <button onClick={logout} title="Deslogar" aria-label="Deslogar">
          <Icon color="blue" icon="logout" />
        </button>
      </div>
    </div>
  );
}
