import { useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Input } from "../../../../shared/fragments/fields/Input";
import { InputPassword } from "../../../../shared/fragments/fields/InputPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, TFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../../../stores/user/useUser";

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const login = useUser(store => store.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TFormValues> = (formData) => {
    login(formData, setLoading);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />

      <InputPassword
        label="Senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
}
