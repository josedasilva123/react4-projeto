import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ButtonAnchor({ children, ...rest }: Props) {
  return <a {...rest}>{children}</a>;
}
