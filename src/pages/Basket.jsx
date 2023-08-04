import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/productSlice";

const Basket = () => {
  const { cartItems, total } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const [chkout, setChkout] = useState(true);
  const [discountBtnDisabled, setDiscountBtnDisabled] = useState(false);
  const [newCount, setNewCount] = useState(0);

  const calculateDiscount = () => {
    if (total === 0) return alert("Please add items to cart.");
    else {
      setDiscountBtnDisabled(true);
      const discount = total * 0.2;
      setNewCount(total - discount);
      setChkout(false);
    }
  };

  const handleSubmit = (e) => {
    if (chkout) {
      alert("Please apply discount first.");
      e.preventDefault();
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          total: newCount,
          cartItems: cartItems,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch(addToCart([]));
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
              cartItems.map((item, index) => (
                <div key={index}>
                  <div className="productDetails">
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <h3>{item.size}</h3>
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
              <button
                className="btn"
                onClick={calculateDiscount}
                disabled={discountBtnDisabled}
              >
                20% Discount
              </button>
            </div>

            <div className="discount">
              <h4>Discounted price: </h4>
              <h3>{newCount > 0 ? newCount : "-"}₺</h3>
            </div>
            <form>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#66b3ff", width: "100%" }}
                onClick={(e) => handleSubmit(e)}
              >
                CHECKOUT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
