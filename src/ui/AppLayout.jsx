import React from 'react';
import Header from './Header';
import CartOverview from '../cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { MyLoader } from './MyLoader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_ifr_auto]  gap-x-4 bg-stone-100">
      {isLoading && <MyLoader />}

      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
