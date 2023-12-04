import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Purchase from "./pages/purchase/Purchase";
import Products from "./pages/products/Products";
import Vacancy from "./pages/vacancy/Vacancy";
import Contacts from "./pages/contacts/Contacts";

export default function App() {
    return (
        <div className="bg-background">
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/products" element={<Products />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
        </div>
    );
}
