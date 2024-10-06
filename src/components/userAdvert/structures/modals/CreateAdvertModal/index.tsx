import { useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateAdvertForm } from "../../forms/CreateAdvertForm";
import { Text } from "../../../../shared/fragments/typography/Text";
import { Title } from "../../../../shared/fragments/typography/Title";
import { Icon } from "../../../../shared/fragments/icons/Icon";

export function CreateAdvertModal() {
  const [isVisible, setIsVisible] = useState(false);

  function onClose() {
    setIsVisible(false);
  }

  return (
    <>
      <Button className="button small blue" onClick={() => setIsVisible(true)}>
        <Icon icon="add" /> Adicionar anúncio
      </Button>
      {isVisible ? (
        <Modal onClose={onClose}>
          <Title className="title two" tag="h2">
            Criar anúncio
          </Title>
          <Text className="text small" tag="p">
            Preencha os campos abaixo para adicionar um anúncio
          </Text>
          <CreateAdvertForm callback={onClose} />
        </Modal>
      ) : null}
    </>
  );
}
