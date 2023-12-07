import React from 'react';
import { useState } from 'react';

export const SearchOrder = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Success!!!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-30 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 sm:w-72"
      />
    </form>
  );
};
