import React, { useState } from "react";
import data_items from "./data/items";
import CategoryMenu from "./CategoryMenu";
import "./CategoryMenu.css";
const product = data_items.items;
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (type_id) => {
    setSelectedCategory(type_id);
  };

  const filteredProducts = selectedCategory
    ? data_items.items.filter((product) => product.type_id === selectedCategory)
    : data_items.items;

  return (
    <div>
      <CategoryMenu onCategorySelect={handleCategorySelect} />

      <div className="products">
        <div className="products__list">
          {filteredProducts.map((product, index) => (
            <div key={index} className="products__item">
              <div className="products__card">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="products__image"
                  loading="lazy"
                />
                <h3>{product.name}</h3>
                <p>{product.ta_price} đ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
