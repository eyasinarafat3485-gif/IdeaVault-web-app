import IdeaValutCard from '@/Components/IdeaValutCard';
import IdeasFilter from '@/Components/IdeasFilter';
import React from 'react';

const IdeasPage = async ({ searchParams }) => {
    const params = await searchParams;

        console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`,{
        cache: 'no-store',
    });

    const ideas = await res.json();
    const search =
        params?.search?.toLowerCase() || '';
    const category =
        params?.category || 'All';
    const categories = [
        'All',
        ...new Set(
            ideas.map((idea) => idea.category)
        ),
    ];

    const filteredIdeas = ideas.filter((idea) => {

        const matchSearch =
            idea.ideaTitle
                ?.toLowerCase()
                .includes(search);

        const matchCategory =
            category === 'All' ||
            idea.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <section className="pt-10 md:pt-15 w-full md:w-[90%] mx-auto bg-white dark:bg-slate-900 overflow-hidden min-h-screen">

            <div className="max-w-7xl mx-auto px-5 md:px-0">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        All Ideas
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        Explore creative and innovative ideas.
                    </p>
                </div>

                <IdeasFilter categories={categories} />
                {filteredIdeas.length > 0 ? (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">

                        {filteredIdeas.map((idea) => (
                            <IdeaValutCard
                                key={idea._id}
                                idea={idea} />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center py-24">

                        <h2 className="text-2xl font-semibold text-slate-500 dark:text-slate-400">
                            No Data Found
                        </h2>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IdeasPage;