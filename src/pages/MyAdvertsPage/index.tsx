import { UserAdvertListLoader } from "../../components/userAdvert/loaders/UserAdvertListLoader";
import { UserAdvertList } from "../../components/userAdvert/structures/lists/UserAdvertList";
import { CreateAdvertModal } from "../../components/userAdvert/structures/modals/CreateAdvertModal";
import { EditAdvertModal } from "../../components/userAdvert/structures/modals/EditAdvertModal";
import { RemoveAdvertModal } from "../../components/userAdvert/structures/modals/RemoveAdvertModal";
import { useUserAdvert } from "../../stores/userAdvert/useUserAdvert";

export function MyAdvertsPage() {
  const loading = useUserAdvert((store) => store.loading);

  return (
    <UserAdvertListLoader>
      <section>
        <div>
          <h1>Meus anúncios</h1>
          <CreateAdvertModal />
        </div>
        <div>{loading ? <UserAdvertList /> : <p>Carregando...</p>}</div>
      </section>
      <EditAdvertModal />
      <RemoveAdvertModal />
    </UserAdvertListLoader>
  );
}
