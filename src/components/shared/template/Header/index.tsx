import { Link } from "react-router-dom";
import Logo from "../../../../assets/LXLogo.svg";
import { useUser } from "../../../../stores/user/useUser";
import { UserControls } from "./UserControls";
import { ButtonLink } from "../../fragments/buttons/ButtonLink";
import { Container } from "../../fragments/containers/Container";
import styles from "./style.module.scss";
import { SearchForm } from "../../../advert/structures/forms/SearchForm";

export function Header() {
  const user = useUser((store) => store.user);

  return (
    <header className={styles.header}>
      <Container size="big">
        <div className={styles.box}>
          <div className={styles.top}>
            <Link to="/">
              <img src={Logo} alt="Logo LX Anúncios" />
            </Link>
            <SearchForm />
          </div>

          {user ? (
            <UserControls />
          ) : (
            <div className={styles.buttonBox}>
              <ButtonLink className="button small blue-outline" to="/login">
                Entrar
              </ButtonLink>
              <ButtonLink className="button small blue" to="/cadastro">
                Cadastrar-se
              </ButtonLink>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
