import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
       <div className="flex justify-center items-center gap-2 h-[85vh]">
        <Spinner size="xl" />
        <span className="text-xs text-muted">loading...</span>
      </div>
    );
};

export default LoadingPage;