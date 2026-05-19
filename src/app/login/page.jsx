'use client'

import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';import { useSearchParams, useRouter } from "next/navigation";

const LoginPage = () => {
     const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        console.log(user);

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        if (data) {
            toast.success("Succesfully login done"),
            window.location.href = callbackUrl;
        }
        if (error) {
            toast.error(error.message)
        }
    }

    const handleSignInWithGoogle = async () => {
        const fullCallbackUrl = `${window.location.origin}${callbackUrl}`;
        await authClient.signIn.social({
            provider: "google",
            callbackURL: fullCallbackUrl,
        })
        toast.success("Successfully login with google")
    }
    

    return (
      <div className='w-[80%] md:w-[40%] mx-auto my-10'>
            <Card className='border rounded-none space-y-5 my-3'>
                <div className='text-center'>
                    <h1 className='text-center text-3xl font-semibold'>Login </h1>
                    <p>Share your thinking with IdeaValut</p>
                </div>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4" >
                    <TextField isRequired name="email" type="email"> <Label>Email</Label>
                        <Input className='dark:bg-slate-700/60' placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired minLength={6} name="password" type="password" validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <Label>Password</Label>
                            <Link href="/forgot-password" className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 hover:underline transition-all">
                                Forgot password?
                            </Link>
                        </div>

                        <Input className='dark:bg-slate-700/60'
                            placeholder="Enter your password" />
                        <Description className="text-[11px]">
                            Must be at least 6 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>

                    <div className="flex gap-2 justify-center">
                        <Button type="submit" className='rounded-md w-full bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-700'>Login
                        </Button>

                    </div>
                    <p className='my-2 text-center'>Don't have an account? <Link href={'/register'} className='text-blue-600 text-xl font-medium'>Register</Link></p>

                    <div className='text-center'>
                        <p className='font-bold'>Or,</p>
                        <Button onClick={handleSignInWithGoogle} variant='outline' className='w-full rounded-md mt-3'><FcGoogle /> Login with Google</Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;