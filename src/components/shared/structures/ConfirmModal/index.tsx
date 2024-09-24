import { Modal } from "../Modal";

interface Props {
  title?: string;
  text?: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export function ConfirmModal({
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
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onCancel}>Não</button>
      </div>
    </Modal>
  );
}
