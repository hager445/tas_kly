import { z } from "zod";

export const createNewPasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be at most 64 characters")
      .refine(
        (value) => !/\s/.test(value),
        "Password must not contain whitespace",
      ),
    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type newPasswordFormData = z.infer<typeof createNewPasswordSchema>;
