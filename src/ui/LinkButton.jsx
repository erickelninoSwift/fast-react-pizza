import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const LinkButton = ({ children, to }) => {
  const classname = 'text-sm text-blue-300 hover:text-blue-800';
  const navigate = useNavigate();
  if (to === '-1')
    return (
      <button className={classname} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
};
