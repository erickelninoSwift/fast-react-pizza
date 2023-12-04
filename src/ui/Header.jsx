import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOrder } from '../order/SearchOrder';
import { Username } from '../user/Username';
const Header = () => {
  return (
    <header className="border-b-5 flex items-center justify-between border-yellow-600 bg-yellow-500  px-4 py-4  uppercase sm:px-6">
      <Link to="/" className="font-semibold tracking-widest">
        Fast react Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
