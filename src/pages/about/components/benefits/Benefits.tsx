import ItemsBenefits from "./ItemsBenefits";

export default function Benefits() {
    return (
        <>
            <div
                className="flex flex-col justify-center space-y-12 h-screen"
                style={{
                    backgroundImage: `url(src/assets/img/home/home4.jpg)`,
                }}
            >
                <div className="flex bg-black bg-opacity-30 h-screen justify-center">
                    <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-24 py-8 pt-[60px] flex flex-col justify-center">
                        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:gap-16 lg:w-1/2">
                            <div className="space-y-8 mt-8">
                                <div className="text space-y-4">
                                    <h2 className="text-xl uppercase">
                                        О компании
                                    </h2>
                                    <p className="">
                                        Металлургическая компания ТОО
                                        «Казахстанский Завод Медных Сплавов»
                                        является одним из лидеров по
                                        производству и продаже медесодержащей
                                        продукции, из сырья вторичных металлов
                                        (лома и отходов цветных металлов) в
                                        Республике Казахстан.
                                    </p>
                                    <p className="">
                                        Компания реализует программы
                                        рационального использования природных
                                        ресурсов и защиты окружающей среды,
                                        которые позволяют повышать экологическую
                                        безопасность производства.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex w-full -order-1 lg:w-1/2">
                        <img
                            className="img h-full object-cover rounded-lg"
                            src="src/assets/img/home/home2.jpg"
                            alt=""
                        ></img>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
