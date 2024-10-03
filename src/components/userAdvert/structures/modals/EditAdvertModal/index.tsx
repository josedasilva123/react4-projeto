import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";
import { Modal } from "../../../../shared/structures/Modal";
import { EditAdvertForm } from "../../forms/EditAdvertForm";

export function EditAdvertModal() {
  const editingAdvert = useUserAdvert((store) => store.editingAdvert);
  const setEditingAdvert = useUserAdvert((store) => store.setEditingAdvert);

  function onClose() {
    setEditingAdvert(null);
  }

  return editingAdvert ? (
    <Modal onClose={onClose}>
      <Title tag="h2">Editar anúncio</Title>
      <Text tag="p">Preencha os campos abaixo para editar um anúncio</Text>
      <EditAdvertForm callback={onClose} />
    </Modal>
  ) : null;
}
