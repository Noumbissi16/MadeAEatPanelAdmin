import { z } from "zod";

export const loginFormSchema = z.object({
  agency: z.string().min(1, { message: "Veuillez choisir une agence" }),
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit contenir au moins 2 caractères",
  }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export const profileFormSchema = z.object({
  agency: z.string().min(1, { message: "Veuillez choisir une agence" }),
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit contenir au moins 2 caractères",
  }),
});
