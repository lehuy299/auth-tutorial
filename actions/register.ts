"use server"

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, name, password } = validatedFields.data;

    const existingUser = getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email already in used!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });

    return { success: "Email sent!" };
};
