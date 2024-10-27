import React from "react";
function Button(){
    return (
    <div className="button">
     <button className="button__item1">
        <img src="https://o2o.ipos.vn/static/images/request_payment.svg"/>
        <p>Request Bill</p>
     </button>
     <button className="button__item2">
        <img src="https://o2o.ipos.vn/static/images/request_service.svg"/>
        <p>Ask for Service</p>
     </button>
     <button className="button__item3">
        <img src="https://o2o.ipos.vn/static/images/rate.svg"/>
        <p>Give Feedback</p>
     </button>
    </div>
    );
}
export default Button;