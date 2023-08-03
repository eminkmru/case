import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

function App() {
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
    </div>
  );
}

export default App;
