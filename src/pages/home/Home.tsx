import AboutHome from "./components/AboutHome";
import MainSwiper from "./components/MainSwiper";
import OurProducts from "./components/OurProducts.tsx/OurProduct";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-16">
            <MainSwiper />
            <OurProducts />
            <AboutHome />
        </div>
    );
}
