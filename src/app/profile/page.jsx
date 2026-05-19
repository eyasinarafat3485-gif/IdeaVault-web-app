'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
    const data = authClient.useSession();
    // console.log(userData);
    const user = data.data?.user;
    console.log(user);
    return (
         <div className='my-10'>
            <h1 className='text-center text-3xl md:text-5xl font-bold mb-10'>Welcome, {user.name}</h1>
            <Card className='mx-auto max-w-96 flex flex-col items-center  bg-white border-gray-600 dark:bg-slate-700 py-10'>
                <Avatar className='h-35 w-35'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p>{user?.email}</p>
                <Link href={`/profile/update`}>
                    <Button className='bg-red-500 hover:bg-red-600 text-white' variant="secondary"><FaEdit /> Update Profile</Button>
                    </Link>
            </Card>
        </div>
    );
};

export default ProfilePage;