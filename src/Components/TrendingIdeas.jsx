import { Button } from "@heroui/react";
import Link from "next/link";
import IdeaValutCard from "./IdeaValutCard";

const TrendingIdeas = async () => {
    const res = await fetch(`http://localhost:5000/trendingIdeas`)
    const ideas = await res.json()
    console.log(ideas);
    return (
        <div className="pt-15 bg-white dark:bg-gray-900 w-full md:w-[90%] mx-auto">
            <div className="text-center mb-10">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight">Trending Ideas</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg ">
                        Check out the top trending ideas at a glance
                    </p>
                </div>
            </div>
          
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mb-10'>
                {
                    ideas.map(idea => <IdeaValutCard key={idea._id} idea={idea}></IdeaValutCard>)
                }
            </div>

            <div className="text-center">
                <Link href={'/ideas'}><Button variant='outline' className='rounded-md w-50 text-xl py-3 border-2 border-blue-500 text-blue-500'>All Ideas</Button></Link>
            </div>
        </div>
    );
};

export default TrendingIdeas;