import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./features/ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Order, { orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";

import AppLayout from "./features/ui/AppLayout";
import NotFound from "./features/ui/Error";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: MenuLoader,
          errorElement: <NotFound />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderID",
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
