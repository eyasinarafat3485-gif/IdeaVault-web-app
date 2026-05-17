'use client'
// import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import logo from '../../public/assets/idea.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    // const { data: session } = authClient.useSession();
    // const user = session?.user;

    // const handleSignOut = async () => {
    //     await authClient.signOut();
    // }

    return (
        <nav className='flex justify-between bg-white items-center px-5'>
            <div className='flex gap-2 items-center'>
                <Image src={logo} width={70} height={20} alt='logo' />
                <p className='font-bold text-3xl'>IdeaVault </p>
            </div>
            <ul className='flex justify-between gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/ideas'}>Ideas</Link></li>
                <li><Link href={'/add-idea'}>Add Idea</Link></li>
                <li><Link href={'/my-ideas'}>My Ideas</Link></li>
                <li><Link href={'/my-interactions'}>My Interactions</Link></li>
            </ul>

            <ul className='flex justify-between gap-4'>
                 <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/register'}>Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;