import z from "zod"

export const threadSchema = z.object({
    text: z.string().min(1)
})


export type ThreadSchema = z.infer<typeof threadSchema>