import { Button } from "../../fragments/buttons/Button";
import { Text } from "../../fragments/typography/Text";
import { Title } from "../../fragments/typography/Title";
import { Modal } from "../Modal";

interface Props {
  loading?: boolean;
  title?: string;
  text?: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export function ConfirmModal({
  loading,
  title,
  text,
  onConfirm,
  onCancel,
  onClose,
}: Props) {
  return (
    <Modal onClose={onClose}>
      {title ? <Title tag="h2">{title}</Title> : null}
      {text ? <Text tag="p">{text}</Text> : null}
      <div>
        <Button onClick={onConfirm} disabled={loading}>
          {loading ? "..." : "Sim"}
        </Button>
        <Button onClick={onCancel} disabled={loading}>
          Não
        </Button>
      </div>
    </Modal>
  );
}
