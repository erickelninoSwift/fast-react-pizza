import React from 'react';
import Button from '../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../services/apiRestaurant';

function UpdateOrders({ order }) {
  const fetcher = useFetcher();
  console.log(order);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={'primary'}>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrders;

export const action = async ({ request, params }) => {
  console.log('hello world');
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
};
