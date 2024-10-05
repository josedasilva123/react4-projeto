import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "p" | "span";
}

export function Price({ children, tag, ...rest }: Props) {
  return (
    <>
      {tag === "p" ? (
        <p className="price" {...rest}>
          {children}
        </p>
      ) : null}

      {tag === "span" ? (
        <span className="price" {...rest}>
          {children}
        </span>
      ) : null}
    </>
  );
}
