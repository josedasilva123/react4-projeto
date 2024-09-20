import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  password: z
    .string()
    .min(8, "A senha é obrigatória e precisa conter pelo menos 8 carácteres."),
  confirmPassword: z.string().min(1, "É obrigatório confirmar a senha"),
  whatsapp: z.string().min(10, "O whatsapp precisar conter no mínimo 10 carácteres.")  
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});