import { Button } from "../../fragments/buttons/Button";
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
      {title ? <h2>{title}</h2> : null}
      {text ? <p>{text}</p> : null}
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
