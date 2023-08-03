import axios from "axios";
import "./App.css";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Basket from "./Basket";
import Home from "./Home";

function App() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/data/product.json");
  //       const productList = response.data.products;
  //       setData(productList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="App" style={{ backgroundColor: "#c7c9c8" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <div className="header">
        <div>
          <Link to="/" className="cartBtn">
            Home
          </Link>
        </div>
        <div>
          <Link to="/basket" className="cartBtn">
            Sepet
          </Link>
        </div>
      </div>
      {/* <div className="products ">
        {data &&
          data.map((product) => (
            <Products key={product.id} product={product} />
          ))}
      </div> */}
    </div>
  );
}

export default App;
