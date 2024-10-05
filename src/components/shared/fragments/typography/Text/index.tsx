import { HTMLAttributes } from "react";

type TSize = "small" | "";

type TAlign = " center" | "";

type TColor = " black50" | "";

type TClassName = `${TSize}${TAlign}${TColor}`;

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "h2" | "h3" | "h4" | "p" | "span";
  className?: TClassName;
}

export function Text({ children, tag, className, ...rest }: Props) {
  const elementClass = `text ${className}`;

  return (
    <>
      {tag === "h2" ? (
        <h2 className={elementClass} {...rest}>
          {children}
        </h2>
      ) : null}

      {tag === "h3" ? (
        <h3 className={elementClass} {...rest}>
          {children}
        </h3>
      ) : null}

      {tag === "h4" ? (
        <h4 className={elementClass} {...rest}>
          {children}
        </h4>
      ) : null}

      {tag === "p" ? (
        <p className={elementClass} {...rest}>
          {children}
        </p>
      ) : null}

      {tag === "span" ? (
        <span className={elementClass} {...rest}>
          {children}
        </span>
      ) : null}
    </>
  );
}
