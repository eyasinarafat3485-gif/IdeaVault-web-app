'use client'
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      const res = await authClient.updateUser({
        name,
        image,
      });
      toast.success("Profile updated successfully ✅");
      router.push("/profile");

    } catch (error) {
      console.error(error);

      toast.error("Update failed ❌");
    }
  };

  return (
    <Card className="border mx-auto w-[85%] md:w-100 py-10 my-10 dark:bg-gray-900">
      <h1 className="text-center text-2xl font-bold">Update Profile</h1>

      <Form onSubmit={onSubmit} className="flex mx-auto flex-col gap-4 w-full">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <div className="flex gap-2 mx-auto">
          <Button type="submit" className="bg-red-500 hover:bg-red-600">
            <FaCheck />
            Update Information
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default UpdateProfilePage;
