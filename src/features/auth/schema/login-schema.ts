import z from "zod"

export const loginSchema = z.object({
    email: z.string({message : "must string"}).min(4, "invalid email or username"),
    password: z.string({message : "must a string"}).min(4, "password must be at least 4 characters!"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
