import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
}

export const TextArea = forwardRef(
  (
    { label, error, ...rest }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div>
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <textarea ref={ref} {...rest} />
        {error ? <p aria-label="error">{error.message}</p> : null}
      </div>
    );
  }
);
