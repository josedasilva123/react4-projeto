import { useState } from "react";
import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";
import { ConfirmModal } from "../../../../shared/structures/ConfirmModal";
import { useToast } from "../../../../../hooks/useToast";

export function RemoveAdvertModal() {
  const [loading, setLoading] = useState(false);

  const removingAdvert = useUserAdvert((store) => store.removingAdvert);
  const setRemovingAdvert = useUserAdvert((store) => store.setRemovingAdvert);
  const removeAdvert = useUserAdvert((store) => store.removeAdvert);

  const { toast } = useToast();

  function onConfirm() {
    removeAdvert(removingAdvert?.id as number, setLoading, () => {
      toast.success("Anúncio removido com sucesso!");
      setRemovingAdvert(null);
    });
  }

  function onClose() {
    setRemovingAdvert(null);
  }

  return removingAdvert ? (
    <ConfirmModal
      loading={loading}
      title="Remover anúncio"
      text="Tem certeza que deseja remover anúncio? Não será possível recuperar seu anúncio após a exclusão"
      onClose={onClose}
      onConfirm={onConfirm}
      onCancel={onClose}
    />
  ) : null;
}
