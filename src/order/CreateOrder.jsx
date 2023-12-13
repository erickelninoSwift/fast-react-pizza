import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => {
    return state.user.username;
  });
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formError = useActionData();
  const cart = fakeCart;

  return (
    <div>
      <h2 className="mb-5 mt-5">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            disabled
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="flex- mb-5 flex gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>

          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>

          {formError?.phone && (
            <p className="mt-2 rounded-md bg-red-200 p-2 text-xs text-red-700">
              {' '}
              Please give us your correct phone number . we might need it to
              contact you{' '}
            </p>
          )}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex flex-row items-center gap-2">
          <input
            className="h-5 w-5 accent-yellow-500 focus:ring"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button isDisabled={isSubmitting} type={'primary'}>
            {isSubmitting ? 'Placing order' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone =
      'Please give us your correct phone number . we might need it to contact you ';

  if (Object.keys(error).length > 0) return error;
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
