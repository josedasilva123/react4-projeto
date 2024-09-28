import { ForwardedRef, forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
}

export const Select = forwardRef(
  (
    { children, label, error, ...rest }: Props,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div>
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <select ref={ref} {...rest}>
          {children}
        </select>
        {error ? <p aria-label="error">{error.message}</p> : null}
      </div>
    );
  }
);
