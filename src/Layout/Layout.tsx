import NavBar from './NavBar/NavBar';
import Sidebar from './SidePanel/Sidebar';
import React from 'react';
import EndPanel from './EndPanel/EndPanel';
import MainGrid from './MainGrid/MainGrid';

function Layout() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="flex flex-grow">
          <MainGrid />
          <EndPanel />
        </div>
      </div>
    </main>
  );
}

export default Layout;
