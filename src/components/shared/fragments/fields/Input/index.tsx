import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "../../typography/Text";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="field">
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <input ref={ref} {...rest} />
        {error ? <Text tag="p" aria-label="error">{error.message}</Text> : null}
      </div>
    );
  }
);
