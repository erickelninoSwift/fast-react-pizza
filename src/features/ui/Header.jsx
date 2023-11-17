import React from "react";
import { Link } from "react-router-dom";
import { SearchOrder } from "../order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast react Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
