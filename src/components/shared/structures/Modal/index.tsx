import { createPortal } from "react-dom";
import { useOutClick } from "../../../../hooks/useOutClick";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const modalRef = useOutClick<HTMLDivElement>(onClose);

  return createPortal(
    <div>
      <div ref={modalRef} role="dialog">
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>,
    document.body
  );
}
