import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, isDisabled, to, type, onClick }) => {
  // const classname =
  //   'mt-[10px] inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-700 hover:text-stone-100 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  const base =
    'inline-block text-sm rounded-full bg-yellow-400  text-sm font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-700 hover:text-stone-100 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-5 text-xs md:py-2.5 md:px-7',
    secondary:
      base +
      'bg-transparent text-sm border-2 border-stone-300  px-4 py-2.5 md:px-6 md:py-3.5 hover:bg-stone-600 hover:text-stone-200 focus:bg-stone-400 focus:ring focus:ring-stone-600 focus:ring-offset-2',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={isDisabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
