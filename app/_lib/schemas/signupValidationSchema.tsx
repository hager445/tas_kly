import { z } from "zod";

export const validationSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .regex(
        /^\p{L}+(?: \p{L}+)*$/u,
        "Name must contain letters and single spaces only",
      ),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be at most 64 characters")
      .refine(
        (value) => !/\s/.test(value),
        "Password must not contain whitespace",
      )
      .refine(
        (value) => /[A-Z]/.test(value),
        "Password must contain at least one uppercase letter",
      )
      .refine(
        (value) => /[a-z]/.test(value),
        "Password must contain at least one lowercase letter",
      )
      .refine(
        (value) => /[0-9]/.test(value),
        "Password must contain at least one numeric digit",
      )
      .refine(
        (value) => /[!@#$%^&*]/.test(value),
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
    jobTitle: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof validationSchema>;
