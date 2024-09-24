import { useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateAdvertForm } from "../../forms/CreateAdvertForm";

export function CreateAdvertModal() {
  const [isVisible, setIsVisible] = useState(false);

  function onClose(){
    setIsVisible(false)
  }

  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Adicionar anúncio</Button>
      {isVisible ? (
        <Modal onClose={onClose}>
          <h2>Criar anúncio</h2>
          <p>Preencha os campos abaixo para adicionar um anúncio</p>
          <CreateAdvertForm callback={onClose} />
        </Modal>
      ) : null}
    </>
  );
}
