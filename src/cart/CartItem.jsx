import { formatCurrency } from '../utils/helpers';
import { DeleteItem } from './DeleteItem';
import { UpdateItemQuantity } from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const quantityUnit = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-7">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQunatity={quantityUnit} />
        <DeleteItem pizzaID={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
