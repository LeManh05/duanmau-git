import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from "react";
function ProductsHeader() {
    return ( 
        <div className="productsHeader">
         <button className="icon-home">
            <FontAwesomeIcon className="house" icon={faHouse}/>
         </button>
         <button className="Form">
            <FontAwesomeIcon className ="search" icon={faMagnifyingGlass}/>
         <input type="search" placeholder="What do you want to find?" className="timkiem"/>
         </button>
        </div>
     );
}

export default ProductsHeader;