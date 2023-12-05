import Benefits from "./components/benefits/Benefits";
import Leader from "./components/Leader";
import Strategy from "./components/Strategy";

export default function About() {
    return (
        <section className="about text-white pt-[60px]">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-24 py-8">
                <Benefits />
                <Leader />
                <Strategy />
            </div>
        </section>
    );
}
