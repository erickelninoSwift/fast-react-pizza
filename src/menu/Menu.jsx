import { getMenu } from '../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-300">
      {menu.map((data) => {
        return <MenuItem key={data.id} pizza={data} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
