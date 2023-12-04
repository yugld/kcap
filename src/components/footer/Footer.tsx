import ButtonFooter from "./ButtonFooter";
import TopFooter from "./TopFooter";

export default function Footer() {
    return (
        <footer className="text-white bg-black">
            <div className="space-y-8 py-8 lg:space-y-8 container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3">
                <TopFooter />
                <ButtonFooter />
            </div>
        </footer>
    );
}
