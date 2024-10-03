import { useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateAdvertForm } from "../../forms/CreateAdvertForm";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";

export function CreateAdvertModal() {
  const [isVisible, setIsVisible] = useState(false);

  function onClose() {
    setIsVisible(false);
  }

  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Adicionar anúncio</Button>
      {isVisible ? (
        <Modal onClose={onClose}>
          <Title tag="h2">Criar anúncio</Title>
          <Text tag="p">Preencha os campos abaixo para adicionar um anúncio</Text>
          <CreateAdvertForm callback={onClose} />
        </Modal>
      ) : null}
    </>
  );
}
