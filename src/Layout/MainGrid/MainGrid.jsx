import Dashboard from '@/components/Dashboard';
import RecentCreations from '@/components/RecentCreations';
import Services from '@/components/Services';
import TwoComponents from '@/components/TwoComponents';
import WallBalance from '@/components/WallBalance';
import React from 'react';

function MainGrid() {
  return (
    <div className='flex-grow'>
      <div className='flex'>
        <Dashboard />
        <WallBalance />
      </div>
      <TwoComponents />
      <Services />
      <RecentCreations />
    </div>
  );
}

export default MainGrid;
