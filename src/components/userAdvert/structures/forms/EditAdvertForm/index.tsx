import { useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Input } from "../../../../shared/fragments/fields/Input";
import { TextArea } from "../../../../shared/fragments/fields/TextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, TFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserAdvert } from "../../../../../stores/userAdvert/useUserAdvert";

export function EditAdvertForm() {
  const [loading, setLoading] = useState(false);

  const editingAdvert = useUserAdvert((store) => store.editingAdvert);
  const updateAdvert = useUserAdvert((store) => store.updateAdvert);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: editingAdvert?.title,
      image: editingAdvert?.image ? editingAdvert.image : "",
      price: String(editingAdvert?.price),
      excerpt: editingAdvert?.excerpt,
      content: editingAdvert?.content,
    },
  });

  const submit: SubmitHandler<TFormValues> = (formData) => {
    const data = {
      ...formData,
      price: Number(formData.price),
    };
    updateAdvert(data, editingAdvert!.id, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Título*"
        {...register("title")}
        disabled={loading}
        error={errors.title}
      />

      <Input
        type="text"
        label="Imagem em destaque"
        {...register("image")}
        disabled={loading}
        error={errors.image}
      />

      <Input
        type="number"
        label="Preço*"
        {...register("price")}
        disabled={loading}
        error={errors.price}
      />

      <TextArea
        label="Mini-descrição"
        {...register("excerpt")}
        disabled={loading}
        error={errors.excerpt}
      />

      <TextArea
        label="Descrição"
        {...register("content")}
        disabled={loading}
        error={errors.content}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Criando..." : "Criar anúncio"}
      </Button>
    </form>
  );
}
