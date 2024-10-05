import { HTMLAttributes } from "react";

type TSize = " small" | "";

type TAlign = " center" | "";

type TColor = " black50" | "";

type TClassName = `text${TSize}${TAlign}${TColor}`;

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "h2" | "h3" | "h4" | "p" | "span";
  className?: TClassName;
}

export function Text({ children, tag, className, ...rest }: Props) {
  return (
    <>
      {tag === "h2" ? (
        <h2 className={className} {...rest}>
          {children}
        </h2>
      ) : null}

      {tag === "h3" ? (
        <h3 className={className} {...rest}>
          {children}
        </h3>
      ) : null}

      {tag === "h4" ? (
        <h4 className={className} {...rest}>
          {children}
        </h4>
      ) : null}

      {tag === "p" ? (
        <p className={className} {...rest}>
          {children}
        </p>
      ) : null}

      {tag === "span" ? (
        <span className={className} {...rest}>
          {children}
        </span>
      ) : null}
    </>
  );
}
