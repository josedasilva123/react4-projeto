import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "../../typography/Text";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: FieldError;
}

export const InputPassword = forwardRef(
  ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div>
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <div>
          <input type={isVisible ? "text" : "password"} ref={ref} {...rest} />
          <button type="button" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Ocultar" : "Exibir"}
          </button>
        </div>
        {error ? <Text tag="p" aria-label="error">{error.message}</Text> : null}
      </div>
    );
  }
);
