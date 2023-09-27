import React, { useState } from 'react';
import backgroundImage from '../Banner/donation-bg.jpg'; // Adjust the path to match your image's location

const Banner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <div 
      className="flex flex-col h-[450px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`
      }}
      
    >
      <h3 className='text-4xl font-bold mb-4'>I Grow By Helping People In Need</h3>
      
      <div className="relative flex w-full max-w-md">
        <input 
          type="text" 
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow w-full pl-3 py-2 border rounded-l-md border-gray-300 sm:text-sm" 
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="flex items-center justify-center px-4 py-2 border border-red-500 rounded-r-md bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Banner;
