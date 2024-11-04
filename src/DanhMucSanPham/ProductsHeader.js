import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import './Products.css';
function ProductsHeader() {
    return ( 
        <div className="productsHeader">
         <button className="productsHeader__icon">
            <FontAwesomeIcon className="productsHeader__house" icon={faHouse}/>
         </button>
         <button className="form">
            <FontAwesomeIcon className ="form__search" icon={faMagnifyingGlass}/>
         <input type="search" placeholder="What do you want to find?" className="form__timkiem"/>
         </button>
        </div>
     );
}

export default ProductsHeader;