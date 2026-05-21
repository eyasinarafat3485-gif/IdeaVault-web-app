import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyInteractionsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const user = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/comments/${user?.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        },
        {
            cache: 'no-store',
        }
    );

    const comments = await res.json();

    return (
        <div className="pt-10 md:pt-14 min-h-screen bg-white dark:bg-slate-900">
            <div className="w-full md:w-[90%] max-w-7xl mx-auto px-4 md:px-0">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        My Interactions
                    </h1>

                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        View your all comments about ideas .
                    </p>
                </div>

                <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
                    <button className="px-4 py-2 text-sm font-semibold border-b-2 border-orange-500 text-orange-500">
                        Comments ({comments?.length || 0})
                    </button>
                </div>

                <div className="space-y-4">
                    {comments?.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment._id} className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 transition hover:shadow-md" >

                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {comment?.userName || 'Idea Title'}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                                    {comment?.comment}
                                </p>

                                <p className="text-xs text-slate-400 mt-3">
                                    {new Date(
                                        comment.createdAt || Date.now()
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
                            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                                No interactions found
                            </h3>

                            <p className="text-slate-500 mt-2">
                                You have not commented on any ideas yet.
                            </p>

                            <Link href="/ideas" className="inline-block mt-5 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition" >
                                Explore Ideas
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyInteractionsPage;