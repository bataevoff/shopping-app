import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`

const StyledContent = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`

const Category = ({ item }) => {
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} alt="category_img" className='w-[100%] h-[300px] mobile:h-[220px]'/>
      <StyledCard className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col text-white'>
        <StyledContent className='hover:border-amber-50 border-transparent border-2 duration-500 text-center pt-[20px] rounded-lg h-[140px] w-[180px]'>
          <h2 className='mb-2 text-[24px]'>{item.title}</h2>
          <button className='btn'>See more</button>
        </StyledContent>
      </StyledCard>
    </div>
  );
};

export default Category;