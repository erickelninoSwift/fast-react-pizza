import { formatCurrency } from '../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { addItem } from '../cart/cartSlice';
import { DeleteItem } from '../cart/DeleteItem';
import { getCurrentQuantityById } from '../cart/cartSlice';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const handleAddingtoCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-80 grayscale' : ''}`}
      />
      <div className="f lex grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-red-500">
              Sold out
            </p>
          )}
          {/* {currentQuantity > 0 && <DeleteItem pizzaID={id}>Delete</DeleteItem>} */}
          {!soldOut && (
            <Button type="small" onClick={handleAddingtoCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
