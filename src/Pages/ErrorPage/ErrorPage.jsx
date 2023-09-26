import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
           <p><Link to='/'><button className='bg-blue-100'>Error! Go Back To Home</button>
           </Link></p>
        </div>
    );
};

export default ErrorPage;