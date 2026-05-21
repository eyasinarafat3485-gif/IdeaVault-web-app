'use client'

import { authClient } from '@/lib/auth-client';
import {
    Button, FieldError, Input, Select, Label, ListBox, TextArea, TextField
} from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AddIdeaPage = () => {
    const { data: session } =
        authClient.useSession();

    const user = session?.user;
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData =
            new FormData(e.currentTarget);

        const idea =
            Object.fromEntries(formData.entries());

        idea.userId = user?.id;
        idea.userEmail = user?.email;
        idea.userName = user?.name;
        idea.createdAt = new Date();

        console.log(idea);

        try {
            const { data: tokenData } =
                await authClient.token();
            console.log(tokenData);

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`
                },

                body: JSON.stringify(idea)
            }
            );

            const data = await res.json();

            console.log(data);

            if (data?.insertedId) {
                toast.success(
                    "Your idea info is successfully added"
                );

                e.target.reset();
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className='p-5 w-[90%] md:w-[70%] mx-auto'>

            <div className='mb-6 pt-10'>
                <h1 className='text-3xl md:text-4xl font-bold text-center'>
                    Added Idea
                </h1>

                <p className='text-center'>
                    Showcase your vision to the world by providing accurate details.
                </p>
            </div>

            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8 mx-auto border border-gray-500 rounded-xl"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Idea Title */}
                    <div className="md:col-span-2">
                        <TextField name="ideaTitle" isRequired>
                            <Label>Idea Title</Label>

                            <Input
                                placeholder="Enter your idea title"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="shortDescription" isRequired>
                        <Label>Short Description</Label>

                        <Input
                            placeholder="Enter your short description"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField name="detailedDescription" isRequired>
                        <Label>Detailed Description</Label>

                        <Input
                            placeholder="Enter your detailed description"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >

                            <Label>Category</Label>

                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>

                                    <ListBox.Item
                                        id="Tech"
                                        textValue="Tech"
                                    >
                                        Tech
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="AI"
                                        textValue="AI"
                                    >
                                        AI
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Health"
                                        textValue="Health"
                                    >
                                        Health
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Education"
                                        textValue="Education"
                                    >
                                        Education
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <TextField name="tags">
                        <Label>Tags (optional)</Label>

                        <Input
                            placeholder="Enter your tags"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>

                            <Input
                                type="url"
                                placeholder="Enter your image url"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="estimatedBudget">
                        <Label>Estimated Budget (optional)</Label>

                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField name="targetAudience" isRequired>
                        <Label>Target Audience</Label>

                        <Input
                            placeholder="Enter your target audience"
                            type="text"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField name="problemStatement" isRequired>
                            <Label>Problem Statement</Label>

                            <TextArea
                                placeholder="Enter your problem statement"
                                className="rounded-3xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="proposedSolution" isRequired>
                            <Label>Proposed Solution</Label>

                            <TextArea
                                placeholder="Enter your proposed solution"
                                className="rounded-3xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-none w-full bg-cyan-500 text-white"
                >
                    Add Idea
                </Button>

            </form>
        </div>
    );
};

export default AddIdeaPage;