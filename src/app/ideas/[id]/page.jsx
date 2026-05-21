import CommentSection from '@/Components/CommentSection';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const IdeaDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const {token} = await auth.api.getToken({
        headers : await headers()
    })
    console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    );
    const idea = await res.json()
    // console.log(idea);

    const { _id, ideaTitle, shortDescription, category, tags, imageUrl, targetAudience, problemStatement, proposedSolution } = idea;
    return (
        <div className='pt-10 md:pt-15 w-full md:w-[90%] mx-auto bg-white dark:bg-slate-900 overflow-hidden '>

            {/* top 2 btn */}
            {/* <div className='flex justify-center gap-4'>
                <EditModal destination={destination} />
                <DeleteDialog destination={destination} />
            </div> */}

            <div className='flex flex-col lg:flex-row w-12/12 lg:w-12/12  mx-auto my-3 bg-white dark:bg-slate-700 shadow-xl rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800'>
                <div className='lg:w-6/12 w-full group overflow-hidden'>
                    <Image src={imageUrl} alt={ideaTitle} height={500} width={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div className='space-y-3 py-5'>
                    <div className='flex gap-2 items-center mt-3 px-3 font-bold text-3xl'>
                        {ideaTitle}
                    </div>
                    <div className='px-3'>
                        <h2 className='text-lg font-bold'>{shortDescription}</h2>
                    </div>
                    <div className='flex gap-3 items-center justify-between px-3'>
                        <p className='text-gray-600 dark:text-white/55'><span className='font-semibold text-blue-600'>Tags:</span> {tags}</p>
                        <p className='text-gray-600 dark:text-white/55'><span className='font-semibold text-blue-600'>Category:</span> {category}</p>
                    </div>

                    <div className='px-3 space-y-2'>
                        <p className='text-blue-600'>Target Audience: <span className='text-gray-600 dark:text-white/55'>{targetAudience}</span></p>
                        <p className='text-blue-600'>Tags: <span className='text-gray-600 dark:text-white/55'>{tags}</span></p>
                        <hr className="my-6 border-t border-slate-250 dark:border-slate-800" />
                        <p className='text-blue-600'>Problem Statement: <br /><span className='text-black dark:text-white'>{problemStatement}</span></p>

                        <p className='text-blue-600'>Problem Statement: <br /><span className='text-black dark:text-white'>{proposedSolution}</span></p>
                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <CommentSection idea={idea} />
            </div>
        </div>
    );
};

export default IdeaDetailsPage;
