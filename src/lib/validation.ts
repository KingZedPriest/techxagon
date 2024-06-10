import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().min(1, 'Email address is required').email('Invalid email address'),
});


export type FormData = z.infer<typeof emailSchema>