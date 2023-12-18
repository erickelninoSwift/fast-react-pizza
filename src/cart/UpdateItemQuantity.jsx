import React, { useState } from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { addQuantity, removeQuantity } from './cartSlice';

export const UpdateItemQuantity = ({ pizzaId, currentQunatity }) => {
  const disptach = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={'round'} onClick={() => disptach(removeQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-medium text-sm ">{currentQunatity}</span>
      <Button type={'round'} onClick={() => disptach(addQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
};
