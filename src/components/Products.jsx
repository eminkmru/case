import React from "react";
import { addToCart } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cards">
      <div className="card">
        {}
        <div className="card-header">
          <img src={product.img} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
          <span style={{ cursor: "default" }}>{product.description}</span>
        </div>
        <div className="card-footer">
          <div className="stock">Last {product.stock}</div>
          <button className="btn" onClick={addCart}>
            Add to Cart
          </button>
        </div>
        <div className="price">{product.price}₺</div>
      </div>
    </div>
  );
};

export default Products;
