import React, { useState } from 'react';
import './CategoryMenu.css';
import { data_items } from './data/items';
import { type } from '@testing-library/user-event/dist/type';
const Category = () =>{
    const handleCategoryClick = (category) => {
      const filterItemsByType = (type_id) => {
        const filteredItems = data_items.items.filter(item => item.type_id === type_id);
        console.log (filteredItems)
      }
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    };
    const handleClickAndScroll = () => {
      handleCategoryClick(category.type_id);
      scrollToTop();
    }
    const category = data_items.item_types;
  return (
      <div className="categories__list">
        {category.map((category) => (
          <div key={category.text_id}>
            <button
              className="category__btn"
              onClick={handleClickAndScroll}           
            >
              {category.name}
            </button>     
          </div>
        ))}
      </div>
  )
}
  
// }

export default Category;