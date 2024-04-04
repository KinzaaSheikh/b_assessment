import ActivityCenter from '@/components/ActivityCenter';
import Notification from '@/components/Notification';
import React from 'react';

function EndPanel() {
  return (
    <div className='w-1/3 m-4 flex flex-col items-center rounded-3xl p-4 bg-[#11112C]' >
      <Notification />
      <ActivityCenter />
    </div>
  );
}

export default EndPanel;
