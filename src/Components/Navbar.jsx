'use client';

import { Button } from '@heroui/react';
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
                            <Link href={link.href} className={`font-semibold transition-colors hover:text-indigo-600 text-lg ${pathname === link.href ? 'text-indigo-600 font-semibold text-lg' : 'text-gray-600 text-2xl'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth Buttons */}
                <div className='hidden lg:flex items-center gap-4'>
                    <Link href="/login" className="font-semibold text-lg text-gray-600 hover:text-indigo-600">Login</Link>
                    <Button as={Link} href="/register" color="primary" variant="flat" className="font-semibold text-lg bg-indigo-600 text-white px-6 rounded-md" >
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className='absolute right-3 top-20 z-50 bg-white lg:hidden overflow-hidden shadow-2xl rounded-md border border-gray-100 w-45'>

                        <div className='flex flex-col gap-1'>
                            {/* Mobile Links */}
                            <ul className='flex flex-col gap-2'>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link onClick={() => setIsOpen(false)} href={link.href} className={`text-lg font-medium block p-1 rounded-md transition-colors ${pathname === link.href ? 'text-indigo-600 bg-indigo-50' : 'text-gray-800 hover:bg-gray-50'}`} >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <hr className="border-gray-100" />
                            <div className='flex flex-col gap-2'>
                                <Button as={Link} href="/login" onClick={() => setIsOpen(false)} variant="flat" className="w-full h-10 bg-gray-100 text-gray-700 font-semibold text-lg">
                                    Login
                                </Button>
                                <Button as={Link} href="/register" onClick={() => setIsOpen(false)} color="primary" className="w-full font-semibold text-lg h-10 bg-indigo-600">
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