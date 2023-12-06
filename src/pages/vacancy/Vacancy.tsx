import OpenVacancy from "./components/OpenVacancy";
import TextVacancy from "./components/TextVacancy";

export default function Vacancy() {
    return (
        <section className="vacancy text-white pt-[60px]">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-12 pt-10 pb-16 lg:py-16">
                <TextVacancy />
                <OpenVacancy />
            </div>
        </section>
    );
}
