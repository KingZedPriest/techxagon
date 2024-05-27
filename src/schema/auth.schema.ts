import { z } from "zod";

//Create a user
export const createAdminSchema = z.object({
    email: z.string({
        required_error: "Liked user details is needed"
    }).email("A valid email is required"),

    hashedPassword: z.string({required_error: "A valid string value is required"})
})
