import { z } from "zod";

export const createProjectValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Title's minimum length: 3 characters")
    .max(100, "Title's maximum length: 100 characters"),
  description: z.string(),
});

export type newProjectFormData = z.infer<typeof createProjectValidationSchema>;
