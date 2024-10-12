import { createPortal } from "react-dom";
import { useOutClick } from "../../../../hooks/useOutClick";
import { Icon } from "../../fragments/icons/Icon";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.box} ref={modalRef} role="dialog">
        <button
          className={styles.close}
          onClick={onClose}
          title="Fechar modal"
          aria-label="Fechar modal"
        >
          <Icon color="black50" icon="close" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
