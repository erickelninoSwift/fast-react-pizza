import { Link } from 'react-router-dom';
import { LinkButton } from '../ui/LinkButton';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
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

function Cart() {
  const cart = fakeCart;
  const username1 = useSelector((state) => {
    return state.user.username;
  });
  return (
    <div className="px-4 py-3">
      <LinkButton to={'/menu'}>&larr; Back to menu</LinkButton>
      <h2 className="mb-5 mt-7 text-xl font-semibold">
        Your cart, {username1}
      </h2>
      <ul className="mb-6 mt-6 divide-y divide-stone-300 border-b">
        {cart.map((data) => {
          return <CartItem item={data} key={data.pizzaId} />;
        })}
      </ul>
      <div className="mt-3 space-x-2">
        <Button to="/order/new" type={'primary'}>
          Order pizzas
        </Button>
        <Button type={'secondary'}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
