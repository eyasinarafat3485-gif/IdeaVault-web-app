import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button, FieldError, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { toast } from 'react-toastify';

const EditComments = ({ c, onEditSuccess }) => {
    const { comment: oldComment, _id } = c; 

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const commentData = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(`http://localhost:5000/comments/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentData)
            });

            if (!res.ok) throw new Error("Update failed");

            const data = await res.json();
            toast.success("Your comment is successfully updated");
            if (onEditSuccess) {
                onEditSuccess(_id, commentData.comment);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Modal>
            <div>
                <Button variant='outline' className='border bg-blue-500 rounded-md mb-3' ><FaEdit />Edit</Button>
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
                                <form onSubmit={onSubmit} className="p-6 space-y-8 ">

                                    {/* Comment */}
                                    <div className="md:col-span-2">
                                        <TextField defaultValue={oldComment} name="comment" isRequired>
                                            <Label>Comment</Label>
                                            <TextArea placeholder="Edit your comment..." className="rounded-3xl" />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Buttons */}
                                    <Modal.Footer>
                                        <Button type="submit" slot="close">Updated Comment</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditComments;