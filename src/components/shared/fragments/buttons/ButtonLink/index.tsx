import { Link, LinkProps } from "react-router-dom";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export function ButtonLink({ children, ...rest }: Props) {
  return <Link {...rest}>{children}</Link>;
}
