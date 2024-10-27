import React, { useState } from 'react';
import './CategoryMenu.css';
import { categories } from './MenuList';
import MenuList from './MenuList';
import { type } from '@testing-library/user-event/dist/type';
const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.item-type === category.id) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <div className="categories__list">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              className="category__btn"
              onClick={() => handleCategoryClick(category)}
            >
              {category['item-type']}
            </button>

            {selectedCategory && selectedCategory.id === category.id && (
              <div className="products__list">
                {category.products.map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image_url} alt={product.name} className="product__image" loading="lazy"/>
                    <h3>{product.name}</h3>
                    <p>{product.ta_price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;