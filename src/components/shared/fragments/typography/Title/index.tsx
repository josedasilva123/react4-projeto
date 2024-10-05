import { HTMLAttributes } from "react";

type TSize = "one" | "two" | "three";

type TAlign = " center" | "";

type TClassName = `${TSize}${TAlign}`;

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: TClassName;
}

export function Title({ children, tag, className, ...rest }: Props) {
  const elementClass = `title ${className}`;

  return (
    <>
      {tag === "h1" ? (
        <h1 className={elementClass} {...rest}>
          {children}
        </h1>
      ) : null}

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

      {tag === "h5" ? (
        <h5 className={elementClass} {...rest}>
          {children}
        </h5>
      ) : null}

      {tag === "h6" ? (
        <h6 className={elementClass} {...rest}>
          {children}
        </h6>
      ) : null}
    </>
  );
}
