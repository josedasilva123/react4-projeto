import { AnchorHTMLAttributes } from "react";
import { TButtonClassName } from "../@types";

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
  className: TButtonClassName;
}

export function ButtonAnchor({ children, className, ...rest }: Props) {
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}
