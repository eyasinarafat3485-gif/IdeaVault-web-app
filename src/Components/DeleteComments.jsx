
import { AlertDialog, Button } from '@heroui/react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DeleteComments = ({ c, onDeleteSuccess }) => {
    const { comment, _id } = c;

    const handledelete = async () => {
        //  const {data:tokenData} = await authClient.token();

        const res = await fetch(`http://localhost:5000/comments/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // authorization: `Bearer ${tokenData?.token}`
            }

        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            toast.warning("Your comments is deleted!")
            onDeleteSuccess(_id);
        }
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
                            <AlertDialog.Heading>Delete comment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p> This will permanently delete {comment} and all of its data. This action cannot be undone.
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

export default DeleteComments;