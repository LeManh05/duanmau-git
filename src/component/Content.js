import React from "react";
function Content(){
    return(
    <div className="content">
        <div className="hello">
            <img className="hello__moon"src="	https://o2o.ipos.vn/static/images/home_restaurant/sun.svg"/>
            <b className="hello__good">Good around noon</b>
            <span className="hello__name">Lê Mạnh</span>
            <img className="hello__pen" src="https://o2o.ipos.vn/static/images/home_restaurant/edit_pencil.svg
"/>
        </div>
        <div className="info">
            <span className="info__text">We will return your items to you at the table:</span>
            <span className="info__number">A02</span>
        </div>
    </div>
    );
}
export default Content;