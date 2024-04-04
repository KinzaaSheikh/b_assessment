import React from 'react';
import { Button } from './ui/button';

function ActivityCenter() {
  return (
    <div className='flex-col items-center rounded-3xl p-4 bg-[#11112C] w-full'>
      <h1 className='p-8'>Activity Center</h1>
      <div className='bg-[#6565A2] p-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <div className='bg-[#34345B] mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h1 className='p-4'>NFT Collection</h1>
          <div className='grid grid-cols-3 gap-4 p-2'>
            <div className='w-full bg-[#9227D2] p-4 rounded-xl'>
              <h1 className='text-2xl font-bold'>3234</h1>
              <p className='text-sm font-thin'>Created</p>
            </div>
            <div className='w-full bg-[#6232E8] p-4 rounded-xl'>
              <h1 className='text-2xl font-bold'>63</h1>
              <p className='text-sm font-thin'>Deployed</p>
            </div>
            <div className='w-full bg-[#E42474] p-4 rounded-xl'>
              <h1 className='text-2xl font-bold'>4</h1>
              <p className='text-sm font-thin'>Pending</p>
            </div>
          </div>
        </div>
        <div className='bg-[#34345B] p-2 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h1 className='p-4'>Latest Smart Contracts</h1>
          <div className='flex justify-between items-center bg-[#000000] p-4 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <div>
              <h1>XYZ Automation Deal</h1>
              <p className='text-xs font-thin'>Deployed 2 March 2024</p>
            </div>
            <button className='bg-[#72F6C0] text-black text-sm px-6 py-2 rounded-full border-2'>
              Deployed
            </button>
          </div>
        </div>
        <div className='bg-[#34345B] p-4 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h1>Campaign</h1>
          <div className='grid grid-cols-2 gap-4 p-2'>
            <div className='w-full bg-[#D55A33] p-4 rounded-xl'>
              <h1 className='text-2xl font-bold'>24</h1>
              <p className='text-sm font-thin'>All Campaign</p>
            </div>
            <div className='w-full bg-[#01986B] p-4 rounded-xl'>
              <h1 className='text-2xl font-bold'>3</h1>
              <p className='text-sm font-thin'>Current Campaign</p>
            </div>
          </div>
        </div>
        <div className='bg-[#34345B] p-2 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h1 className='p-4'>Next Billing Date</h1>
          <div className='flex justify-between items-center bg-[#000000] p-4 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <div>
              <h1>Wednesday, 14 Feb 2024</h1>
              <p className='text-xs font-thin'>Your Pro Plan is expiring soon</p>
            </div>
            <button className='bg-[#72F6C0] text-black text-sm px-6 py-2 rounded-full border-2'>
              Pay Now
            </button>
          </div>
        </div>
        <div className='bg-[#34345B] p-2 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
          <h1 className='p-4'>New Release</h1>
          <div className='flex justify-between items-center bg-[#000000] p-4 mb-4 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <div>
              <h1>Motion Creator</h1>
              <p className='text-xs font-thin'>Turn your images into motion</p>
            </div>
            <button className='bg-[#72F6C0] text-black text-sm px-6 py-2 rounded-full border-2'>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCenter;
