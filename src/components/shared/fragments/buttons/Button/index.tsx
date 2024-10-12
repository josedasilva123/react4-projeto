import { ButtonHTMLAttributes } from "react";
import { TButtonClassName } from "../@types";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
  className: TButtonClassName;
}

export function Button({ children, className, ...rest }: Props) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
