import AboutProduct from "./components/AboutProduct";
import InitProducts from "./components/InitProducts";

export default function Products() {
    return (
        <div className="products text-white pt-[60px]">
            <InitProducts />
            <AboutProduct />
        </div>
    );
}
