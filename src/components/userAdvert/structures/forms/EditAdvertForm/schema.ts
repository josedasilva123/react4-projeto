import { z } from "zod";

export const schema = z.object({
    title: z.string().min(1, "O título é obrigatório."),
    content: z.string().min(1, "O conteúdo é obrigatório."),
    image: z.string().url("Este campo precisa ser preenchido com uma URL.").optional(),
    price: z.string().min(1, "O preço é obrigatório."),
    excerpt: z.string().min(1, "A mini-descrição é obrigatória.")
});

export type TFormValues = z.infer<typeof schema>;