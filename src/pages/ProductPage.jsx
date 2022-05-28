import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

const ProductPage = () => {

  const colorsStyle = 'w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3] hover:scale-[1.2] ease-in duration-100'

  return (
    <div>
      <Announce />
      <Navbar />
      
      <div className='flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3'>
        <div className='flex flex-1 items-center justify-center'>
          <img src="https://cdn.shopify.com/s/files/1/0156/0327/products/MollyjoggerJonesDogTeeBackWEB21in72dpi_1024x1024.jpg?v=1629226951"
               alt="product_img" className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'/>
        </div>
        <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center'>
          <h1 className='title text-[40px] mobile:text-[30px]'>Creamy Hoody Original</h1>
          <p className='pr-[4rem] text-justify mt-4 mobile:p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur cum, deleniti dolores iure laboriosam magnam neque, nulla possimus quasi quo, ratione reiciendis sit ut vel velit vero voluptas voluptatibus.</p>
          <p className='mt-7 text-3xl'>Price: <b>70$</b></p>
          <div className='flex text-2xl mt-7'>
            Colors
            <div className={colorsStyle + ' bg-red-600'}></div>
            <div className={colorsStyle + ' bg-blue-600'}></div>
            <div className={colorsStyle + ' bg-yellow-300'}></div>
          </div>
          <div className='mt-7 text-2xl'>
            Size
            <select className='ml-5 border-2'>
              <option selected disabled>Select</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className='mt-5'>
            <Counter />
          </div>
          <button className='btn mt-5'>Add to cart</button>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;