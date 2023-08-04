import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.product);
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
            <i class="fa-solid fa-cart-shopping"></i> Cart
            {count > 0 && <span className="cartCount">{count}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
