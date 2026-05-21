import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import UserIdeaCard from '@/Components/UserIdeaCard';

const MyIdeasPage = async () => {
    const session =
        await auth.api.getSession({
            headers: await headers(),
        });

    const user = session?.user;

    if (!user) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>
                    Please Login First
                </h1>
            </div>
        );
    }

    const { token } =
        await auth.api.getToken({
            headers: await headers(),
        });

    console.log(token);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${user?.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
            next: {
                tags: [`my-ideas-${user.id}`],
            },
        }
    );

    const ideas = await res.json();

    console.log(ideas);

    return (
        <div className="pt-10 md:pt-15 w-full md:w-[90%] mx-auto bg-white dark:bg-slate-900 overflow-hidden min-h-screen">

            <div className="max-w-7xl mx-auto px-5 md:px-0">

                <div className="mb-8">

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        My Ideas
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        Explore your creative and innovative ideas.
                    </p>
                </div>

                <div className='my-5'>

                    {ideas?.length > 0 ? (

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                            {ideas.map((idea) => (
                                <div key={idea._id}> <UserIdeaCard idea={idea} /></div>
                            ))}

                        </div>
                    ) : (

                        <div className="text-center py-20 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">

                            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                                No ideas found
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">
                                You have not created any ideas yet.
                            </p>

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default MyIdeasPage;