import z from "zod"

export const threadTextForm = z.object({
    text: z.string().min(1)
})


export type ThreadTextForm = z.infer<typeof threadTextForm>