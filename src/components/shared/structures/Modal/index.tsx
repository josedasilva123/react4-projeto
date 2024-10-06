import { createPortal } from "react-dom";
import { useOutClick } from "../../../../hooks/useOutClick";
import { Icon } from "../../fragments/icons/Icon";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);

  return createPortal(
    <div>
      <div ref={modalRef} role="dialog">
        <button
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
