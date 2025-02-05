import { z } from "zod";

export const apiStringResponseSchema = z.object({
  message: z.string()
});
export type ApiStringResponse = z.infer<typeof apiStringResponseSchema>;