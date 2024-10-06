import { Link, LinkProps } from "react-router-dom";
import { TButtonClassName } from "../@types";

interface Props extends Omit<LinkProps, "className"> {
  children: React.ReactNode;
  className: TButtonClassName;
}

export function ButtonLink({ children, className, ...rest }: Props) {
  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  );
}
