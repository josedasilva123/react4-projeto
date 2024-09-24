import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";
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
      <h2>Editar anúncio</h2>
      <p>Preencha os campos abaixo para editar um anúncio</p>
      <EditAdvertForm callback={onClose} />
    </Modal>
  ) : null;
}
