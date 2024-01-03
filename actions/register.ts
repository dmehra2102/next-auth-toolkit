"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) return { error: "Invalid fields!" };

  return { success: "Email Sent" };
};
