import { z } from 'zod';

export const VALUES = [
  "JSS1A", "JSS1B", "JSS1C", "JSS1D", "JSS1E",
  "JSS2A", "JSS2B", "JSS2C", "JSS2D", "JSS2E",
  "JSS3A", "JSS3B", "JSS3C", "JSS3D", "JSS3E",
  "SS1A", "SS1B", "SS1C", "SS1D", "SS1E",
  "SS2A", "SS2B", "SS2C", "SS2D", "SS2E",
  "SS3A", "SS3B", "SS3C", "SS3D", "SS3E"
] as const;

const ClassEnums = z.enum(VALUES);

export const formSchema = z.object({
  class: ClassEnums
});

export type FormData = z.infer<typeof formSchema>;
