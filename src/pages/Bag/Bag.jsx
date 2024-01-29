import "./Bag.css";
import React from "react";
import { useShoppingCart } from "../../Context/ShoopingCartContext";
import { Link, useNavigate } from "react-router-dom";

function Bag() {
  const navigate = useNavigate();
  const { cartItems, total, removeFromCart } = useShoppingCart();

  const handleContinueShopping = () => {
    navigate("/couture");
  };

  const handlePay = () => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="body-bag">
      {cartItems.map((item) => (
        <div key={item.id}>
          <img className="item-cart" src={item.image} title="" />
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>
        </div>
      ))}

      <div className="payment-item">
        {cartItems.map((item) => (
          <div key={item.id} className="row-name-price">
            <div className="item-name-box">{item.name}</div>
            <div className="item-price-box">${item.price}</div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="delete-button"
            >
              <div className="line-1"></div>
              <div className="line-2"></div>
            </button>
          </div>
        ))}

        <div className="row-total-items">
          <div className="total-text"> TOTAL: </div>
          <div className="total-price">${total}</div>
        </div>

        <button
          className="button-shopping-bag"
          onClick={handleContinueShopping}
        >
          CONTINUE SHOPPING
        </button>

        <button className="button-pay" onClick={handlePay}>
          PAY
        </button>
      </div>
    </div>
  );
}
export default Bag;
