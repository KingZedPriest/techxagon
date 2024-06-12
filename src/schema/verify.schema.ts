import { z } from 'zod';

export const verifySchema = z.object({
  email: z.string().min(1, 'Email address is required').email('Invalid email address'),
  code: z.string().min(1, 'Verification code is required')
});


export type FormData = z.infer<typeof verifySchema>