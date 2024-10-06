import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "../../typography/Text";

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
      <div className="field">
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <textarea ref={ref} {...rest} />
        {error ? (
          <Text tag="p" aria-label="error">
            {error.message}
          </Text>
        ) : null}
      </div>
    );
  }
);
