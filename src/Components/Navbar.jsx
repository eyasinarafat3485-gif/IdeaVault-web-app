'use client';

import { Avatar, Button, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Moon, Sun, Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/assets/idea.jpg';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const isLoading = isPending;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Ideas', href: '/ideas' },
        { name: 'Add Idea', href: '/add-idea' },
        { name: 'My Ideas', href: '/my-ideas' },
        { name: 'My Interactions', href: '/my-interactions' },
    ];

    const AuthLoadingSpinner = () => (
        <div className="flex items-center justify-center w-10 h-10">
            <Loader2
                size={22}
                className="animate-spin text-indigo-500 dark:text-indigo-400"
            />
        </div>
    );

    return (
        <nav className='sticky z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto flex justify-between items-center h-20 px-5 lg:px-14'>

                <Link href="/" className='flex gap-2 items-center hover:opacity-90 transition-opacity'>
                    <Image src={logo} width={50} height={50} alt='logo' className='w-10 h-10 md:w-12 md:h-12 object-contain' />
                    <p className='font-bold text-2xl md:text-3xl tracking-tighter text-slate-900 dark:text-white'>
                        IdeaVault
                    </p>
                </Link>

                <ul className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`font-semibold transition-colors ${pathname === link.href ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-300'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-3 md:gap-4'>
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 rounded-xl cursor-pointer bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:ring-2 ring-indigo-400 transition-all shadow-sm flex items-center justify-center" aria-label="Toggle Theme">
                        {mounted && (theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />)}
                        {!mounted && <div className="w-[22px] h-[22px]" />}
                    </button>

                    <div className='hidden md:flex items-center'>
                        {isLoading ? (
                            <Spinner />
                        ) : user ? (
                            <div className='relative'>
                                <button onClick={() => setProfileOpen(!profileOpen)} className='cursor-pointer'>
                                    <Avatar>
                                        <Avatar.Image as="button" color="warning" src={user?.image} name={user?.name?.[0]} size="sm" />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                </button>

                                <AnimatePresence>
                                    {profileOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute right-0 mt-3 w-40 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden z-50'>

                                            <Link href="/profile" onClick={() => setProfileOpen(false)} className='block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition'>My Profile
                                            </Link>

                                            <button onClick={() => { handleSignOut(); setProfileOpen(false); }} className='w-full text-left px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition'> Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className='hidden lg:flex items-center gap-4'>
                                <Link href="/login" passHref>
                                    <Button variant="outline" className="font-semibold rounded-md dark:text-white text-indigo-600 dark:border-indigo-400 dark:text-indigo-400">Login
                                    </Button>
                                </Link>
                                <Link href="/register" passHref>
                                    <Button color="primary" className="font-semibold rounded-md bg-indigo-600 text-white shadow-md">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2 text-3xl text-gray-700 dark:text-gray-200 focus:outline-none'>
                        {isOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 dark:bg-black/60 lg:hidden z-40"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className='absolute right-3 top-20 z-50 bg-white dark:bg-slate-900 lg:hidden shadow-2xl rounded-md border border-gray-100 dark:border-slate-800 w-44 p-3'
                        >
                            <div className='flex flex-col gap-2'>
                                <ul className='flex flex-col gap-1'>
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link onClick={() => setIsOpen(false)} href={link.href} className={`text-lg font-medium block p-2 rounded-md transition-all ${pathname === link.href ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10'
                                                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'
                                                }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <hr className="border-gray-100 dark:border-slate-800 my-1" />

                                <div className='flex flex-col gap-2'>
                                    {isLoading ? (
                                        <div className="flex justify-center py-2">
                                            <Loader2 size={24} className="animate-spin text-indigo-500" />
                                        </div>
                                    ) : user ? (
                                        <>
                                            <Link href="/profile" passHref>
                                                <Button onClick={() => setIsOpen(false)}
                                                    variant="flat"
                                                    className="w-full h-11 font-bold text-indigo-600 dark:text-indigo-400">
                                                    My Profile
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => { handleSignOut(); setIsOpen(false); }}
                                                className="w-full font-bold h-11 bg-red-500 text-white"
                                            >
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login" passHref>
                                                <Button
                                                    onClick={() => setIsOpen(false)}
                                                    variant="flat"
                                                    className="w-full h-11 font-bold text-indigo-600 dark:text-indigo-400 dark:border-white"
                                                >
                                                    Login
                                                </Button>
                                            </Link>
                                            <Link href="/register" passHref>
                                                <Button
                                                    onClick={() => setIsOpen(false)}
                                                    className="w-full font-bold h-11 bg-indigo-600 text-white"
                                                >
                                                    Register
                                                </Button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;