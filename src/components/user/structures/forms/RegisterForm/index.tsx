import { SubmitHandler, useForm } from "react-hook-form";
import { schema, TFormValues } from "./schema";
import { Input } from "../../../../shared/fragments/fields/Input";
import { InputPassword } from "../../../../shared/fragments/fields/InputPassword";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../../../stores/user/useUser";
import { useToast } from "../../../../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../../shared/structures/Form";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const registerUser = useUser((store) => store.register);

  const { toast } = useToast();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TFormValues> = (formData) => {
    registerUser(formData, setLoading, () => {
      toast.success("Usuário cadastrado com sucesso.");
      navigate("/");
    });
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Nome"
        {...register("name")}
        disabled={loading}
        error={errors.name}
      />

      <Input
        type="email"
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

      <InputPassword
        label="Confirmar senha"
        {...register("confirmPassword")}
        disabled={loading}
        error={errors.confirmPassword}
      />

      <Input
        type="text"
        label="Whatsapp"
        {...register("whatsapp")}
        disabled={loading}
        error={errors.whatsapp}
      />

      <Button className="button big blue full" type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar-se"}
      </Button>
    </Form>
  );
}
