import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Purchase from "./pages/purchase/Purchase";
import Products from "./pages/products/Products";

export default function App() {
    return (
        <div className="bg-[#171717]">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}
