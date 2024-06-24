import { z } from 'zod';


export const VALUES = ["male", "female"] as const;

export const GenderEnums = z.enum(VALUES)


export const studentSchema = z.object({
  name: z.string().min(1, 'Student Name is Required'),
  email: z.string().email('Invalid email address').optional(),
  regNumber: z.string().min(1, "A unique Reg Number is needed"),
  gender: GenderEnums,
});


export type FormData = z.infer<typeof studentSchema>