import React, { useState } from 'react';
import './CategoryMenu.css';
import { data_items } from './data/items';

const CategoryMenu = ({ onCategorySelect }) => {
  const handleCategoryClick = (type_id) => {
    const filteredItems = data_items.items.filter(item => item.type_id === type_id);
    onCategorySelect(type_id);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleClickAndScroll = (category) => {
    handleCategoryClick(category.text_id);
    scrollToTop();
  };

  const categories = data_items.item_types;

  return (
    <div className="categories__list">
      {categories.map((category, index) => (
        <div key={index}>
          <button
            className="category__btn"
            onClick={() => handleClickAndScroll(category)}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;