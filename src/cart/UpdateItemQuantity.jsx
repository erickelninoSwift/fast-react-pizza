import React from 'react';
import Button from '../ui/Button';

export const UpdateItemQuantity = ({ pizzaId }) => {
  return (
    <div className="flex gap-2">
      <Button type={'round'}>-</Button>

      <Button type={'round'}>+</Button>
    </div>
  );
};
