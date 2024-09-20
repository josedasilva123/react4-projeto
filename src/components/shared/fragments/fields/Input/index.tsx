import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <input ref={ref} {...rest} />
        {error ? <p aria-label="error">{error.message}</p> : null}
      </div>
    );
  }
);
