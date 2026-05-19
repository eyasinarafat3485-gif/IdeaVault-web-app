import React from 'react';
import { FcCancel } from 'react-icons/fc';

const ForgotPasswordPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-6 mx-auto align-middle">
            <FcCancel size={50}/> 
             <p className='text-3xl font-bold ml-3'>Forgot Password Page</p>
        </div>
    );
};

export default ForgotPasswordPage;