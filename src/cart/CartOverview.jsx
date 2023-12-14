import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../utils/helpers';

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalAmount = useSelector(getTotalCartPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="font-semibold text-stone-400 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
