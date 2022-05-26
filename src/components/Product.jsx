import React, { useState } from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Product = ({ item }) => {

  const [hover, setHover] = useState('opacity-0')

  const handleHoverEnter = () => {
    setHover(' opacity-1 bg-[rgba(0,0,0,0.4)]')
  }

  const handleHoverExit = () => {
    setHover(' opacity-0')
  }

  const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center' +
    ' m-3 cursor-pointer hover: bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100   '

  return (
    <div className='flex flex-1 items-center justify-center min-w-[300px] min-h-[200px]
    overflow-hidden rounded-md shadow-lg m-2 relative'
    onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt='product_img' className='h-[250px] w-[350px]'/>
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` + hover}>
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;