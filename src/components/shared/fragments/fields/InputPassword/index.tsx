import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "../../typography/Text";
import { Icon } from "../../icons/Icon";
import styles from "./style.module.scss";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: FieldError;
}

export const InputPassword = forwardRef(
  ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    const currentText = isVisible ? "Ocultar senha" : "Exibir senha";

    return (
      <div className="field">
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <div className={styles.wrapper}>
          <input type={isVisible ? "text" : "password"} ref={ref} {...rest} />
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            title={currentText}
            aria-label={currentText}
          >
            {isVisible ? (
              <Icon color="blue" icon="visibility_off" />
            ) : (
              <Icon color="blue" icon="visibility" />
            )}
          </button>
        </div>
        {error ? (
          <Text className="text small red" tag="p" aria-label="error">
            {error.message}
          </Text>
        ) : null}
      </div>
    );
  }
);
