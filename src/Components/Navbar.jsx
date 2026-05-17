// 'use client'
// // import { authClient } from '@/lib/auth-client';
// import { Avatar, Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react';
// import { BiMenu, BiX } from 'react-icons/bi';
// import logo from '../../public/assets/idea.png'

// const Navbar = () => {
//     const [open, setOpen] = useState(false);
//     const pathname = usePathname();
//     // const { data: session } = authClient.useSession();
//     // const user = session?.user;

//     // const handleSignOut = async () => {
//     //     await authClient.signOut();
//     // }

//     return (
//         <nav className='flex justify-between bg-white items-center px-5 lg:px-14'>
//             <div className='flex gap-2 items-center'>
//                 <Image src={logo} width={70} height={20} alt='logo' />
//                 <p className='font-bold text-3xl'>IdeaVault </p>
//             </div>
//             <ul className='flex justify-between gap-6'>
//                 <li><Link href={'/'}>Home</Link></li>
//                 <li><Link href={'/ideas'}>Ideas</Link></li>
//                 <li><Link href={'/add-idea'}>Add Idea</Link></li>
//                 <li><Link href={'/my-ideas'}>My Ideas</Link></li>
//                 <li><Link href={'/my-interactions'}>My Interactions</Link></li>
//             </ul>

//             <ul className='flex justify-between gap-4'>
//                  <li><Link href={'/login'}>Login</Link></li>
//                 <li><Link href={'/register'}>Register</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


'use client';

import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/assets/idea.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // মেনু ওপেন থাকলে স্ক্রল বন্ধ রাখার জন্য (UX Improvement)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Ideas', href: '/ideas' },
        { name: 'Add Idea', href: '/add-idea' },
        { name: 'My Ideas', href: '/my-ideas' },
        { name: 'My Interactions', href: '/my-interactions' },
    ];

    const authLinks = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
    ];

    return (
        <nav className='sticky z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='max-w-7xl mx-auto flex justify-between items-center h-20 px-5 lg:px-14'>

                {/* Logo Section */}
                <Link href="/" className='flex gap-2 items-center hover:opacity-90 transition-opacity'>
                    <Image src={logo} width={50} height={50} alt='logo' className='w-10 h-10 md:w-12 md:h-12 object-contain' />
                    <p className='font-bold text-2xl md:text-3xl tracking-tighter text-slate-900'>IdeaVault</p>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`text-sm font-medium transition-colors hover:text-indigo-600 ${pathname === link.href ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth Buttons */}
                <div className='hidden lg:flex items-center gap-4'>
                    <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Login</Link>
                    <Button as={Link} href="/register" color="primary" variant="flat" className="font-semibold bg-indigo-600 text-white px-6 rounded-xl" >
                        Register
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='p-2 text-3xl text-gray-700 focus:outline-none'>
                        {isOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: '100vh' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className='fixed inset-0 top-20 z-40 bg-white lg:hidden overflow-y-auto' >
                        <div className='flex flex-col p-6 gap-6'>
                            {/* Mobile Links */}
                            <ul className='flex flex-col gap-5 border-b border-gray-100 pb-8'>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link onClick={() => setIsOpen(false)} href={link.href} className={`text-xl font-semibold ${pathname === link.href ? 'text-indigo-600' : 'text-gray-800'}`} >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Auth Links */}
                            <div className='flex flex-col gap-4'>
                                <Button as={Link} href="/login" onClick={() => setIsOpen(false)} variant="bordered" className="w-full text-lg font-semibold h-14 border-gray-200" >
                                    Login
                                </Button>
                                <Button as={Link} href="/register" onClick={() => setIsOpen(false)} color="primary" className="w-full text-lg font-semibold h-14 bg-indigo-600 shadow-lg shadow-indigo-200">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;