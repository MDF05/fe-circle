import { z } from "zod"


export const forgotSchema = z.object({
    email: z.string().email("your email is not valid !!!")
});

export type ResetSchema = z.infer<typeof forgotSchema>;


