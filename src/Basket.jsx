import React, { useState } from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const { cartItems, total } = useSelector((state) => state.product);

  const [chkout, setChkout] = useState(true);
  const [click, setClick] = useState(false);
  const [newCount, setNewCount] = useState(0);

  const handleClick = () => {
    setClick(true);
    const discount = total * 0.2;
    setNewCount(total - discount);
    setChkout(false);
  };
  const handleSubmit = () => {
    if (chkout) {
      alert("Please apply discount first.");
    } else {
      alert("Order is completed.");
    }
  };

  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <div className="cartCard">
        <div className="left-side">
          <div>
            <h1>Shopping Cart</h1>
          </div>
          <hr />
          <div className="shopingCart">
            {cartItems &&
              cartItems.map((item) => (
                <div>
                  <div className="productDetails">
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <h3>{item.price}₺</h3>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
          <div className="orderDetails">
            <h2>Total</h2>
            <h2>{total}₺</h2>
          </div>
        </div>
        <div className="right-side">
          <div className="rightContainer">
            <div>
              <h2>Order Summary</h2>
            </div>

            <div className="calc">
              <h4>Apply Discount: </h4>
              <button className="btn" onClick={handleClick} disabled={click}>
                20% Discount
              </button>
            </div>

            <div className="discount">
              <h4>Discounted price: </h4>
              <h3>{newCount > 0 ? newCount : "-"}₺</h3>
            </div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#66b3ff" }}
              onClick={handleSubmit}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
