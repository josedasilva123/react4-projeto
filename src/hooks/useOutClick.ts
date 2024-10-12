import { useEffect, useRef } from "react";

export const useOutClick = <Element extends globalThis.Element>(
  callback: () => void
) => {
  const ref = useRef<Element>(null);

  useEffect(() => {
    function handleMousedown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as HTMLElement)) {
        callback();
      }
    }

    window.addEventListener("mousedown", handleMousedown);

    return () => {
      window.removeEventListener("mousedown", handleMousedown);
    };
  }, [callback]);

  return ref;
};
