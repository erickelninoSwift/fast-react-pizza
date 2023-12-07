import React from 'react';

const Button = ({ children, isDisabled = false }) => {
  return (
    <button
      disabled={isDisabled}
      className="mt-[10px] inline-block rounded-lg bg-yellow-400 p-[7px] text-sm font-semibold uppercase text-stone-600 hover:bg-yellow-700 hover:text-stone-100 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
