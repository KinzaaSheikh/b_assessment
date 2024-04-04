import React from 'react';

function Notification() {
  return (
    <div className='flex flex-col items-center rounded-3xl p-4 bg-[#11112C] w-full'>
      <div className='flex justify-between p-8 w-[25rem]'>
        <h1>Notifications</h1>
        <a className='text-blue-400' href="#">see all</a>
      </div>
      <div className='bg-[#6565A2] p-4 rounded-2xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <p className='text=sm font-thin'>Today</p>
       <div>
         <p className='text-purple-300 text-sm '>12.04pm</p>
         <p className='text-sm'>It is a long Established Fact That A Reader Will Be Distracted By The Readable Content Of Page</p>
       </div>
      </div>
    </div>
  );
}

export default Notification;
