import { z } from "zod";

export const schema = z.object({
	email: z.string().trim().email({ message: "Invalid email address" }),
	password: z.string().trim().min(8, { message: "Invalid password" }),
	toSave: z.boolean(),
});

export const registerShema = z.object({
	email: z.string().trim().email({ message: "Invalid email address" }),
	password: z.string().trim().min(8, { message: "Invalid password" }),
});
