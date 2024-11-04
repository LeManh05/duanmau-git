import React from "react";
import data_items from "./data/items";
import "./CategoryMenu.css";
import CategoryMenu from "./CategoryMenu";
const product = data_items.items;
const Product = () => {
  return (
    <div className="products">
      <div className="products__list">
        {product.map((product) => (
          <div key={product.type_id}>
            <div className="products__item">
              {/* <h2>{category.name}</h2> */}
            </div>
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
  );
};
export default Product;
