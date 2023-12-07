import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as MenuLoader } from './menu/Menu';
import Order, { orderLoader } from './order/Order';
import Cart from './cart/Cart';

import AppLayout from './ui/AppLayout';
import NotFound from './ui/Error';
import CreateOrder, { action as createOrderAction } from './order/CreateOrder';
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: MenuLoader,
          errorElement: <NotFound />,
        },
        { path: '/cart', element: <Cart /> },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: '/order/:orderID',
          element: <Order />,
          loader: orderLoader,
          errorElement: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
