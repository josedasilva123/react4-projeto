import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../shared/fragments/fields/Input";
import { useAdvert } from "../../../../../stores/advert/useAdvert";
import { Icon } from "../../../../shared/fragments/icons/Icon";

interface FormValues {
  value: string;
}

export function SearchForm() {
  const setSearch = useAdvert((store) => store.setSearch);

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submit: SubmitHandler<FormValues> = (formData) => {
    setSearch(formData.value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input type="text" {...register("value")} />
      <button type="submit" title="Buscar" aria-label="Buscar">
        <Icon color="blue" icon="search" />
      </button>
    </form>
  );
}
