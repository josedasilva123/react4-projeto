import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "p" | "span";
}

export function Text({ children, tag, ...rest }: Props) {
  return (
    <>
      {tag === "p" ? <p {...rest}>{children}</p> : null}
      {tag === "span" ? <span {...rest}>{children}</span> : null}
    </>
  );
}
