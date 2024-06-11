import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().min(1, 'Email address is required').email('Invalid email address'),
  subject: z.string().min(1, "Subject is needed")
});


export type FormData = z.infer<typeof emailSchema>