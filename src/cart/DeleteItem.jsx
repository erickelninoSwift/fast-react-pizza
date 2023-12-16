import React from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
export const DeleteItem = ({ children, pizzaID }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(pizzaID));
  };
  return (
    <Button type={'small'} onClick={handleDelete}>
      {' '}
      {children}
    </Button>
  );
};
