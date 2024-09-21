import { useState } from "react";
import { InputPassword } from "../../../../shared/fragments/fields/InputPassword";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, TFormValues } from "./schema";
import { useUser } from "../../../../../stores/user/useUser";

export function UserPasswordForm() {
  const [loading, setLoading] = useState(false);

  const updatePassword = useUser((store) => store.updatePassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TFormValues> = (formData) => {
    updatePassword(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputPassword
        label="Antiga senha"
        {...register("oldPassword")}
        disabled={loading}
        error={errors.oldPassword}
      />

      <InputPassword
        label="Nova senha"
        {...register("newPassword")}
        disabled={loading}
        error={errors.newPassword}
      />

      <InputPassword
        label="Confirmar nova senha"
        {...register("confirmNewPassword")}
        disabled={loading}
        error={errors.confirmNewPassword}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Atualizando..." : "Atualizar senha"}
      </Button>
    </form>
  );
}
