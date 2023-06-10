import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Basket } from '../modules';

function MainLayout() {
  return (
    <div
      className={`
        min-h-full
        flex flex-col items-center
        lg:bg-page lg:py-12 lg:px-5 2xl:py-20 2xl:px-10
        font-Inter
      `}
    >
      <div
        className={`
          mg-auto
          w-full
          flex flex-col flex-auto
          overflow-hidden
          lg:rounded-3xl
          bg-content-color lg:shadow-content
        `}
        style={{ maxWidth: '1080px' }}
      >
        <Basket />
        <Header />
        <main className="page pb-14 pt-32 md:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
