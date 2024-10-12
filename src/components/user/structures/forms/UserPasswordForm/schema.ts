import { z } from "zod";

export const schema = z.object({
  oldPassword: z.string().min(1, "Fornecer a senha atual é obrigatório"),
  newPassword: z
    .string()
    .min(8, "A senha é obrigatória e precisa conter pelo menos 8 carácteres."),
  confirmNewPassword: z.string().min(1, "É obrigatório confirmar a senha")  
}).refine(({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmNewPassword"]
});

export type TFormValues = z.infer<typeof schema>;