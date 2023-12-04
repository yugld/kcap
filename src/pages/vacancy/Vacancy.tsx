import OpenVacancy from "./components/OpenVacancy";
import TextVacancy from "./components/TextVacancy";

export default function Vacancy() {
    return (
        <section className="vacancy text-white">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-16 py-6 pt-[60px]">
                <TextVacancy />
                <OpenVacancy />
            </div>
        </section>
    );
}
