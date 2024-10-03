import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
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
          <Title tag="h1">Meus anúncios</Title>
          <CreateAdvertModal />
        </div>
        <div>
          {loading ? <Text tag="p">Carregando...</Text> : <UserAdvertList />}
        </div>
      </section>
      <EditAdvertModal />
      <RemoveAdvertModal />
    </UserAdvertListLoader>
  );
}
