import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "p" | "span";
  size?: "big";
}

export function Price({ children, tag, size, ...rest }: Props) {
  return (
    <>
      {tag === "p" ? (
        <p className={`price ${size}`} {...rest}>
          {children}
        </p>
      ) : null}

      {tag === "span" ? (
        <span className={`price ${size}`} {...rest}>
          {children}
        </span>
      ) : null}
    </>
  );
}
