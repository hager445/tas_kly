import { z } from "zod";

export const projectValidationFormSchema = z.object({
  name: z
    .string()
    .min(3, "Title's minimum length: 3 characters")
    .max(100, "Title's maximum length: 100 characters"),
  description: z.string(),
});

export type projectFormData = z.infer<typeof projectValidationFormSchema>;
