'use client'

// import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
// import { toast } from 'react-toastify';

const LoginPage = () => {

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget)
    //     const user = Object.fromEntries(formData.entries())
    //     console.log(user);

    //     const { data, error } = await authClient.signIn.email({
    //         email: user.email,
    //         password: user.password,
    //     })
    //     if (data) {
    //         redirect('/')
    //     }
    //     if (error) {
    //         toast.error(error.message)
    //     }
    // }

    // const handleSignInWithGoogle = async () => {
    //     await authClient.signIn.social({
    //         provider: "google"
    //     })
    // }


    return (
        <div className='mx-w-6xl mx-auto my-10'>
            <Card className='border rounded-none space-y-5 my-3'>
                <div className='text-center'>
                    <h1 className='text-center text-3xl font-semibold'>Login Account</h1>
                    <p>Start your adventure with Wanderlust</p>
                </div>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4" >

                    <TextField
                        isRequired
                        name="email"
                        type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
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
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 justify-center">
                        <Button type="submit" className='rounded-md w-full bg-cyan-500'>
                            Login
                        </Button>

                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>Or,</p>
                        <Button onClick={handleSignInWithGoogle} variant='outline' className='w-full rounded-md mt-3'><FcGoogle/>  Sign in with Google</Button>
                    </div>
                </Form></Card>
        </div>
    );
};

export default LoginPage;