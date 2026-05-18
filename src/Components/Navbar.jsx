'use client';

import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/assets/idea.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    return (
        <nav className='sticky z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto flex justify-between items-center h-20 px-5 lg:px-14'>

                {/* Logo Section */}
                <Link href="/" className='flex gap-2 items-center hover:opacity-90 transition-opacity'>
                    <Image src={logo} width={50} height={50} alt='logo' className='w-10 h-10 md:w-12 md:h-12 object-contain' />
                    <p className='font-bold text-2xl md:text-3xl tracking-tighter text-slate-900 dark:text-white'>IdeaVault</p>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`font-semibold transition-colors hover:text-indigo-600 ${pathname === link.href ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-300'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div className='flex items-center gap-3 md:gap-4'>
                    
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:ring-2 ring-indigo-400 transition-all shadow-sm flex items-center justify-center"
                        aria-label="Toggle Theme"
                    >
                        {mounted && (theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />)}
                        {!mounted && <div className="w-[22px] h-[22px]" />} {/* Placeholder */}
                    </button>

                    {/* Desktop Auth Buttons */}
                    {/* <div className='hidden lg:flex items-center gap-4'>
                        <Button as={Link} href="/login" variant="outline" className="font-semibold rounded-md dark:text-white text-indigo-600 dark:text-indigo-400" >
                            Login
                        </Button>
                        <Button as={Link} href="/register" color="primary" className="font-semibold rounded-md bg-indigo-600 text-white shadow-md" >
                            Register
                        </Button>
                    </div> */}
                    <div className='hidden lg:flex items-center gap-4'>
    {/* Login Button */}
    <Link href="/login" passHref>
        <Button 
            variant="outline" 
            className="font-semibold rounded-md dark:text-white text-indigo-600 dark:text-indigo-400"
        >
            Login
        </Button>
    </Link>

    {/* Register Button */}
    <Link href="/register" passHref>
        <Button 
            color="primary" 
            className="font-semibold rounded-md bg-indigo-600 text-white shadow-md"
        >
            Register
        </Button>
    </Link>
</div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2 text-3xl text-gray-700 dark:text-gray-200 focus:outline-none'>
                        {isOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 dark:bg-black/60 lg:hidden"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className='absolute right-3 top-20 z-50 bg-white dark:bg-slate-900 lg:hidden shadow-2xl rounded-md border border-gray-100 dark:border-slate-800 w-44'
                        >
                            <div className='flex flex-col gap-2'>
                                <ul className='flex flex-col gap-1'>
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link 
                                                onClick={() => setIsOpen(false)} 
                                                href={link.href} 
                                                className={`text-lg font-medium block p-2 rounded-md transition-all ${pathname === link.href ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'}`} 
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <hr className="border-gray-100 dark:border-slate-800" />
                                
                                <div className='flex flex-col gap-2 pt-1'>
                                    <Button as={Link} 
        href="/login" onClick={() => setIsOpen(false)} variant="flat" className="w-full h-11 font-bold text-indigo-600 dark:text-indigo-400">
                                        Login
                                    </Button>
                                    <Button  href="/register" onClick={() => setIsOpen(false)} className="w-full font-bold h-11 bg-indigo-600 text-white">
                                        Register
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;;