'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const IdeasFilter = ({ categories }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search =
            formData.get('search') || '';
        const category =
            searchParams.get('category') || 'All';

        router.push(
            `/ideas?search=${search}&category=${category}`
        );
    };

    const handleCategory = (e) => {
        const category = e.target.value;
        const search =
            searchParams.get('search') || '';

        router.push(
            `/ideas?search=${search}&category=${category}`
        );
    };

    return (

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 px-2">

            <form onSubmit={handleSearch} className="w-full md:w-[70%]">
                <div className="flex gap-3">

                    <input type="text" name="search" placeholder="Search by idea title..." defaultValue={
                        searchParams.get('search') || ''}
                        className=" w-full px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" />

                    <button type="submit" className=" px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 cursor-pointer">
                        Search
                    </button>
                </div>
            </form>

            <div className="w-full md:w-[30%]">

                <select onChange={handleCategory} defaultValue={
                    searchParams.get('category') || 'All'}
                    className="w-full px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 cursor-pointer">

                    {categories.map((cat, index) => (
                        <option key={index} value={cat} >
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default IdeasFilter;