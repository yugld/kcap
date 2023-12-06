import ItemsBenefits from "../../../about/components/benefits/ItemsBenefits";
import Points from "./Points";

// export const typesLatun = [
//     {
//         title: "ЛАЖМц",
//         id: 1,
//     },
//     {
//         title: "ЛКС",
//         id: 2,
//     },
//     {
//         title: "ЛСч",
//         id: 3,
//     },
//     {
//         title: "ЛС",
//         id: 4,
//     },
//     {
//         title: "Лос",
//         id: 5,
//     },
//     {
//         title: "ЛМцС",
//         id: 6,
//     },
//     {
//         title: "ЛЦ",
//         id: 7,
//     },
// ];

export default function OurCompany() {
    return (
        <section className="ourProducts flex flex-col gap-8 justify-between">
            <Points />

            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3">
                <div className="flex flex-col lg:flex-row-reverse lg:justify-between text-white gap-8">
                    <div className="flex w-full lg:w-1/2 items-center justify-center">
                        <img
                            className="img object-cover rounded-xl"
                            src="src/assets/img/home/home3.jpg"
                        ></img>
                    </div>

                    <div className="flex flex-col w-full lg:w-1/2 self-center space-y-6">
                        <p className="text-2xl">Наша продукция</p>
                        <div className="flex flex-col gap-2 text-xl">
                            <p>
                                Мы производим по заказу потребителя различные
                                виды марок латуни: ЛАЖМц, ЛКС, ЛСч, ЛС, Лос,
                                ЛМцС, ЛЦ
                            </p>

                            <p className="text-sm text-gray-300">
                                А-Алюминий, Ж-Железо, О-Олово, С-Свинец,
                                К-Кремний, Мц-Марганец, Л-Основной компонент
                                медь
                            </p>
                        </div>
                        <a
                            href="/contacts"
                            className="text-base hover:text-primary p-2 border hover:border-primary w-fit rounded-lg"
                        >
                            Оставить заявку
                        </a>
                    </div>
                </div>
            </div>

            <ItemsBenefits />
        </section>
    );
}
