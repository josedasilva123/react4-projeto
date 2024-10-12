import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../shared/fragments/fields/Input";
import { Icon } from "../../../../shared/fragments/icons/Icon";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

interface FormValues {
  value: string;
}

export function SearchForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submit: SubmitHandler<FormValues> = (formData) => {
    navigate(`/?search=${formData.value}`);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <Input type="text" placeholder="Buscar" {...register("value")} />
      <button type="submit" title="Buscar" aria-label="Buscar">
        <Icon color="blue" icon="search" />
      </button>
    </form>
  );
}
