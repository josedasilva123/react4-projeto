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
      {title ? <Title className="title three" tag="h2">{title}</Title> : null}
      {text ? <Text className="text small" tag="p">{text}</Text> : null}
      <div>
        <Button className="button small red" onClick={onConfirm} disabled={loading}>
          {loading ? "..." : "Sim"}
        </Button>
        <Button className="button small blue-outline" onClick={onCancel} disabled={loading}>
          Não
        </Button>
      </div>
    </Modal>
  );
}
