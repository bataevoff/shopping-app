import React from 'react';

const Counter = () => {
  return (
    <div className='flex items-start justify-center text-2xl'>
      Quantity
      <div className='ml-5 shadow-md flex'>
        <div className='bg-[#8a4af3] flex text-white items-center w-8 justify-center cursor-pointer rounded-l-md'>
          -
        </div>
        <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>
          1
        </div>
        <div className='bg-[#8a4af3] flex text-white items-center w-8 justify-center cursor-pointer rounded-r-md'>
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;