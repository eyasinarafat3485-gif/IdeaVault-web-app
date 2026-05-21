'use client'
import React from 'react';
import {
    Button,
    FieldError,
    Input,
    Select,
    Label,
    ListBox,
    TextArea,
    TextField,
    Modal,
    Surface
} from '@heroui/react';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';


const EditModal = ({ idea }) => {
    const router = useRouter();
    const { _id } = idea;
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const idea = Object.fromEntries(formData.entries())

        const {data:tokenData} = await authClient.token();
        console.log(tokenData);
        const res = await fetch(`http://localhost:5000/my-idea/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(idea)
        });
        const data = await res.json()
        console.log(data);
        router.refresh();
        toast.success("Updated successfully.")

    }

    return (
        <Modal>
            <div>
                <Button variant='outline' className='border bg-blue-500 rounded-md mb-3 text-white' ><FaEdit />Edit</Button>
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Comment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={onSubmit}
                                    className="p-10 space-y-8 mx-auto border border-gray-300 rounded-xl"
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

                                        {/* Short Description */}
                                        <TextField name="shortDescription" isRequired>
                                            <Label>Short Description</Label>

                                            <Input
                                                placeholder="Enter your short description"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />
                                        </TextField>

                                        {/* Category */}
                                        <div>
                                            <Select name="category" isRequired className="w-full" placeholder="Select category"
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

                                        {/* Tags */}
                                        <TextField name="tags">
                                            <Label>Tags (optional)</Label>

                                            <Input
                                                placeholder="Enter your tags"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />
                                        </TextField>

                                        {/* Image URL */}
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

                                    </div>

                                    {/* Button */}
                                    <Button
                                        type="submit"
                                        variant="outline"
                                        className="rounded-none w-full bg-cyan-500 text-white"
                                    >
                                        Updated Idea
                                    </Button>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
        // <div>
        //       <form
        //                     onSubmit={onSubmit}
        //                     className="p-10 space-y-8 mx-auto border border-gray-300 rounded-xl"
        //                 >

        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        //                         {/* Idea Title */}
        //                         <div className="md:col-span-2">
        //                             <TextField name="ideaTitle" isRequired>
        //                                 <Label>Idea Title</Label>

        //                                 <Input
        //                                     placeholder="Enter your idea title"
        //                                     className="rounded-2xl"
        //                                 />

        //                                 <FieldError />
        //                             </TextField>
        //                         </div>

        //                         {/* Short Description */}
        //                         <TextField name="shortDescription" isRequired>
        //                             <Label>Short Description</Label>

        //                             <Input
        //                                 placeholder="Enter your short description"
        //                                 className="rounded-2xl"
        //                             />

        //                             <FieldError />
        //                         </TextField>

        //                         {/* Detailed Description */}
        //                         <TextField name="detailedDescription" isRequired>
        //                             <Label>Detailed Description</Label>

        //                             <Input
        //                                 placeholder="Enter your detailed description"
        //                                 className="rounded-2xl"
        //                             />

        //                             <FieldError />
        //                         </TextField>

        //                         {/* Category */}
        //                         <div>
        //                             <Select
        //                                 name="category"
        //                                 isRequired
        //                                 className="w-full"
        //                                 placeholder="Select category"
        //                             >

        //                                 <Label>Category</Label>

        //                                 <Select.Trigger className="rounded-2xl">
        //                                     <Select.Value />
        //                                     <Select.Indicator />
        //                                 </Select.Trigger>

        //                                 <Select.Popover>
        //                                     <ListBox>

        //                                         <ListBox.Item
        //                                             id="Tech"
        //                                             textValue="Tech"
        //                                         >
        //                                             Tech
        //                                             <ListBox.ItemIndicator />
        //                                         </ListBox.Item>

        //                                         <ListBox.Item
        //                                             id="AI"
        //                                             textValue="AI"
        //                                         >
        //                                             AI
        //                                             <ListBox.ItemIndicator />
        //                                         </ListBox.Item>

        //                                         <ListBox.Item
        //                                             id="Health"
        //                                             textValue="Health"
        //                                         >
        //                                             Health
        //                                             <ListBox.ItemIndicator />
        //                                         </ListBox.Item>

        //                                         <ListBox.Item
        //                                             id="Education"
        //                                             textValue="Education"
        //                                         >
        //                                             Education
        //                                             <ListBox.ItemIndicator />
        //                                         </ListBox.Item>

        //                                     </ListBox>
        //                                 </Select.Popover>
        //                             </Select>
        //                         </div>

        //                         {/* Tags */}
        //                         <TextField name="tags">
        //                             <Label>Tags (optional)</Label>

        //                             <Input
        //                                 placeholder="Enter your tags"
        //                                 className="rounded-2xl"
        //                             />

        //                             <FieldError />
        //                         </TextField>

        //                         {/* Image URL */}
        //                         <div className="md:col-span-2">
        //                             <TextField name="imageUrl" isRequired>
        //                                 <Label>Image URL</Label>

        //                                 <Input
        //                                     type="url"
        //                                     placeholder="Enter your image url"
        //                                     className="rounded-2xl"
        //                                 />

        //                                 <FieldError />
        //                             </TextField>
        //                         </div>

        //                         {/* Estimated Budget */}
        //                         <TextField name="estimatedBudget">
        //                             <Label>Estimated Budget (optional)</Label>

        //                             <Input
        //                                 type="number"
        //                                 placeholder="1299"
        //                                 className="rounded-2xl"
        //                             />

        //                             <FieldError />
        //                         </TextField>

        //                         {/* Target Audience */}
        //                         <TextField name="targetAudience" isRequired>
        //                             <Label>Target Audience</Label>

        //                             <Input
        //                                 placeholder="Enter your target audience"
        //                                 type="text"
        //                                 className="rounded-2xl"
        //                             />

        //                             <FieldError />
        //                         </TextField>

        //                         {/* Problem Statement */}
        //                         <div className="md:col-span-2">
        //                             <TextField name="problemStatement" isRequired>
        //                                 <Label>Problem Statement</Label>

        //                                 <TextArea
        //                                     placeholder="Enter your problem statement"
        //                                     className="rounded-3xl"
        //                                 />

        //                                 <FieldError />
        //                             </TextField>
        //                         </div>

        //                         {/* Proposed Solution */}
        //                         <div className="md:col-span-2">
        //                             <TextField name="proposedSolution" isRequired>
        //                                 <Label>Proposed Solution</Label>

        //                                 <TextArea
        //                                     placeholder="Enter your proposed solution"
        //                                     className="rounded-3xl"
        //                                 />

        //                                 <FieldError />
        //                             </TextField>
        //                         </div>
        //                     </div>

        //                     {/* Button */}
        //                     <Button
        //                         type="submit"
        //                         variant="outline"
        //                         className="rounded-none w-full bg-cyan-500 text-white"
        //                     >
        //                         Add Idea
        //                     </Button>

        //                 </form>
        // </div>
    );
};

export default EditModal;