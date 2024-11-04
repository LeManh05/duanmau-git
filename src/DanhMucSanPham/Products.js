import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, house } from '@fortawesome/free-solid-svg-icons';
import ProductsHeader from './ProductsHeader';
import './Products.css';
import CategoryMenu from "./CategoryMenu";
import Product from "./Product";
function Products() {
    return ( 
        <div className="products">
        <ProductsHeader/>
        <CategoryMenu/>
        <Product/>
        </div>
     );
}

export default Products;