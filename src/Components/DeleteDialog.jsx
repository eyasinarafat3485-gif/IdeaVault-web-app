'use client'
import { AlertDialog, Button } from '@heroui/react';
import { FaTrash } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const DeleteDialog = ({ idea }) => {
    const router = useRouter();
    const { _id } = idea;
    const handledelete = async () => {
        const { data: tokenData } = await authClient.token()
        console.log(tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-idea/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
        });
        const data = await res.json();
        console.log(data);
        router.refresh();
        toast.warning('Your ideas is deleted')
    }
    return (
        <AlertDialog>
            <Button className='font-bold rounded-md' variant="danger"><FaTrash /> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete  and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handledelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>

        </AlertDialog>
    );
};

export default DeleteDialog;