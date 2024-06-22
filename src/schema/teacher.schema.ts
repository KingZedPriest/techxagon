import { z } from 'zod';

export const teacherSchema = z.object({
  name: z.string().min(1, 'Teacher Name is Required'),
  email: z.string().min(1, 'Email address is required').email('Invalid email address'),
  hashedPassword: z.string().min(1, 'Password is Required'),
  schoolId: z.string().optional(),
});


export type FormData = z.infer<typeof teacherSchema>