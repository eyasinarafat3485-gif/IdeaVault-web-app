'use client';

import { Spinner } from '@heroui/react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">

            <div className="flex flex-col items-center gap-4">

                <Spinner size="lg" color="primary" />

                <p className="text-blue-600 dark:text-slate-300 text-lg font-medium">
                    Loading Ideas...
                </p>
            </div>
        </div>
    );
};

export default Loading;