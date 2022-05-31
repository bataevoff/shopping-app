import React from 'react';
import { Link } from 'react-router-dom'
import { ApiCategories } from '../api/ApiCategories'
import Category from './Category';

const Categories = () => {
  return (
    <div className='flex justify-between items-center p-6 mobile:flex-col'>
      {
        ApiCategories.map((category, index) => {
          return <Category item={category} key={Math.random()}/>
        })
      }
    </div>
  );
};

export default Categories;