'use client';

import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-lg font-semibold text-red-500">
                    User not found
                </p>
            </div>
        );
    }

    return (
        <div className="my-10 px-4">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
                Welcome, {user?.name}
            </h1>

            <Card className="mx-auto max-w-96 flex flex-col items-center bg-white dark:bg-slate-700 py-10 border border-gray-200 dark:border-gray-600 shadow-md">

                <img src={user?.image} name={user?.name} className="w-32 h-32 text-3xl mb-5 rounded-full" />

                <h2 className="text-xl font-bold dark:text-white">
                    {user?.name}
                </h2>

                <p className="text-gray-500 dark:text-gray-300 mt-1">
                    {user?.email}
                </p>

                <Link href="/profile/update" className="mt-5">
                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                        <FaEdit />
                        Update Profile
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ProfilePage;