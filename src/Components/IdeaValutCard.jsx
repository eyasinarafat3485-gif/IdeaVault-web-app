'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const IdeaValutCard = ({ idea }) => {

    const { _id, ideaTitle, shortDescription, category, tags, imageUrl } = idea;

    const categoryStyles = {
        'ai': 'bg-red-200 text-red-700 border border-red-200',
        'AI': 'bg-red-200 text-red-700 border border-red-200',

        'health': 'bg-green-200 text-green-700 border border-green-200',
        'Health': 'bg-green-200 text-green-700 border border-green-200',

        'education': 'bg-yellow-200 text-yellow-700 border border-yellow-200',
        'Education': 'bg-yellow-200 text-yellow-700 border border-yellow-200',

        'tech': 'bg-blue-200 text-blue-700 border border-blue-200',
        'Tech': 'bg-blue-200 text-blue-700 border border-blue-200'
    };

    const currentStyle =
        categoryStyles[category] ||
        'bg-gray-100 text-gray-700';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            transition={{
                duration: 0.4,
                ease: 'easeOut',
            }}
            className='h-full'
        >
            <div className='border-2 border-red-400 rounded-xl overflow-hidden bg-white dark:bg-black shadow-md hover:shadow-2xl transition-all duration-300 h-full'>

                <div className='relative overflow-hidden'>
                    <motion.img
                        src={imageUrl}
                        alt={ideaTitle}
                        className='rounded-sm max-h-[300px] w-full object-cover'
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />

                    {category && (
                        <span
                            className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold rounded-full uppercase tracking-wider ${currentStyle}`}
                        >
                            {category}
                        </span>
                    )}
                </div>

                <div className='space-y-3 p-3'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='font-bold text-3xl'
                    >
                        {ideaTitle}
                    </motion.div>

                    <div>
                        <h2 className='text-lg font-bold text-gray-700 dark:text-white/80'>
                            {shortDescription}
                        </h2>
                    </div>

                    <div className='flex gap-3 items-center justify-between'>
                        <p className='text-gray-600 dark:text-white/55'>
                            <span className='font-semibold text-blue-600'>
                                Tags:
                            </span>{' '}
                            {tags}
                        </p>
                    </div>

                    <Link href={`ideas/${_id}`}>
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Button className='rounded-md w-full flex items-center gap-2 font-semibold'>
                                <FaExternalLinkAlt />
                                View Idea
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default IdeaValutCard;