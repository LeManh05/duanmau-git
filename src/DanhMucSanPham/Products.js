import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, house } from '@fortawesome/free-solid-svg-icons';
import ProductsHeader from './ProductsHeader';
import './Products.css';
import CategoryMenu from "./CategoryMenu";
import MenuList from "./MenuList";
function Products() {
    return ( 
        <div className="products">
        <ProductsHeader/>
        <CategoryMenu/>
        </div>
     );
}

export default Products;