"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type LoginSchema = z.infer<typeof LoginSchema>

export const LoginForm = () => {

    const form = useForm<LoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </CardWrapper>
    )
}
