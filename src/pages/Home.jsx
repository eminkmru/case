import React from "react";
import axios from "axios";
import Products from "../components/Products";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/product.json");
        const productList = response.data.products;
        setData(productList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="products ">
        {data &&
          data.map((product, index) => (
            <Products key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
