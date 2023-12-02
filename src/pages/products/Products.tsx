import AboutProduct from "./components/AboutProduct";
import InitProducts from "./components/InitProducts";

export default function Products() {
    return (
        <div className="purchase text-white pt-">
            <InitProducts />
            <AboutProduct />
        </div>
    );
}
