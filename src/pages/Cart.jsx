import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className='p-5'>
        <div className='flex justify-center text-5xl'>
          Cart
        </div>
        <div className='flex items-center justify-between mt-4 '>
          <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>
            Continue shopping
          </button>
          <div className='flex underline text-lg hover:cursor-pointer'>
            <p>Items in your Cart: 3</p>
            <p className='ml-5'>Wishlist items: 0</p>
          </div>
          <button className='btn'>
            Checkout
          </button>
        </div>

        <div className='flex mt-7'>
          <div className='flex flex-col flex-1'>
            <div className='flex w-[100%] h-auto items-center '>
              <div className='flex self-start'>
                <img className='w-[8rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-100' src="https://cdn.shopify.com/s/files/1/0156/0327/products/MollyjoggerJonesDogTeeBackWEB21in72dpi_1024x1024.jpg?v=1629226951" alt="product_img"/>
                <div className='desc flex flex-col ml-5 h-auto justify-between'>
                <p>
                  <b className='mr-2'>ID:</b>1234567
                </p>
                <p>
                  <b className='mr-2'>Product:</b>Dazy Hoody
                </p>
                <p className='flex items-center justify-start'>
                  <b className='mr-2'>Color:</b>
                  <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                </p>
                <p>
                  <b className='mr-2'>Size:</b>Large
                </p>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center flex-auto'>
                <Counter />
                <p className='flex items-center justify-center text-4xl mt-3'>
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className='mt-7 mb-7'/>
            <div className='flex w-[100%] h-auto items-center '>
              <div className='flex self-start'>
                <img className='w-[8rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-100' src="https://cdn.shopify.com/s/files/1/0156/0327/products/MollyjoggerJonesDogTeeBackWEB21in72dpi_1024x1024.jpg?v=1629226951" alt="product_img"/>
                <div className='desc flex flex-col ml-5 h-auto justify-between'>
                  <p>
                    <b className='mr-2'>ID:</b>1234567
                  </p>
                  <p>
                    <b className='mr-2'>Product:</b>Dazy Hoody
                  </p>
                  <p className='flex items-center justify-start'>
                    <b className='mr-2'>Color:</b>
                    <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                  </p>
                  <p>
                    <b className='mr-2'>Size:</b>Large
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center flex-auto'>
                <Counter />
                <p className='flex items-center justify-center text-4xl mt-3'>
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className='mt-7 mb-7'/>
          </div>

          <div className='p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center'>
            <h1 className='text-[2rem]'>Summary</h1>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Shipping discount</p>
              <p>- $40</p>
            </div>
            <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>

      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;