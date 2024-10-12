import { FormHTMLAttributes } from "react";

interface Props extends Omit<FormHTMLAttributes<HTMLFormElement>, "className"> {
  children: React.ReactNode;
}

export function Form({ children, ...rest }: Props) {
  return (
    <form className="form" {...rest}>
      {children}
    </form>
  );
}
