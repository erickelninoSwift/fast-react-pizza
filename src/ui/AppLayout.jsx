import React from 'react';
import Header from './Header';
import CartOverview from '../cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { MyLoader } from './MyLoader';
import { useSelector } from 'react-redux';
const AppLayout = () => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => {
    return state.cart.cart.length;
  });
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-4 bg-stone-100 font-sans sm:h-screen">
      {isLoading && <MyLoader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      {cartItems > 0 && <CartOverview />}
    </div>
  );
};

export default AppLayout;
