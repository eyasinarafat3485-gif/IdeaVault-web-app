import { Button } from '@heroui/react';
import { div } from 'framer-motion/client';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const IdeaValutCard = ({ idea}) => {

    
    const { ideaTitle, shortDescription, category, tags, imageUrl } = idea;
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

    const currentStyle = categoryStyles[category] || 'bg-gray-100 text-gray-700';

    return (
        <div>
        <div className='border-2 border-red-400 rounded-md object-contain overflow-hidden'>

            <div className='relative'>
                <img src={imageUrl} alt={ideaTitle} className='rounded-sm max-h-[300px] w-full object-cover' />

                {category && (
                    <span className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold rounded-full uppercase tracking-wider ${currentStyle}`}>
                        {category}
                    </span>
                )}
            </div>

            <div className='space-y-3'>
                <div className='flex gap-2 items-center mt-3 px-3 font-bold text-3xl'>
                    {ideaTitle}
                </div>
                <div className='px-3'>
                    <h2 className='text-lg font-bold'>{shortDescription}</h2>
                </div>
                <div className='flex gap-3 items-center justify-between px-3'>
                    <p className='text-gray-600 dark:text-white/55'><span className='font-semibold text-blue-600'>Tags:</span> {tags}</p>
                </div>
            </div>

            <Button className='ml-3 my-3 rounded-md w-[50%] mx-auto flex items-center gap-2'>
                <FaExternalLinkAlt /> Add Idea
            </Button>
            
            {/* <Link href={`/destinations/${_id}`}></Link> */}
        </div>
          </div>
    );
};

export default IdeaValutCard;