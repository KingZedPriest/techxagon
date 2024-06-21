import { z } from 'zod';

export const schoolSchema = z.object({
  name: z.string().min(1, 'School Name is Required'),
  location: z.string().optional(),
  motto: z.string().optional()
});


export type FormData = z.infer<typeof schoolSchema>