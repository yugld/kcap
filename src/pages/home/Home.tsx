import DiagramContent from "../purchase/components/DiagramContent";
import AboutHome from "./components/AboutHome";
import MainSwiper from "./components/mainSwiper/MainSwiper";
import OurCompany from "./components/ourCompany/OurCompany";
import OurProducts from "./components/OurProducts.tsx/OurProduct";

export default function Home() {
    return (
        <div className="flex flex-col text-white">
            <MainSwiper />
            <OurCompany />
            <DiagramContent />
            {/* <OurProducts />
            <AboutHome /> */}
        </div>
    );
}
