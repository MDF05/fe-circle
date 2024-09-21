import { z } from "zod"


export const resetSchema = z.object({
    password: z.string().length(5, "password must be at least 5 characters"),
    newPassword: z.string().length(5, "password must be at least 5 characters")
})


export type ResetSchema = z.infer<typeof resetSchema>


