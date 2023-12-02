const benefits = [
    {
        name: "Современная складская инфраструктура",
        path: "src/assets/img/about/warehouse.png",
        id: 1,
    },
    {
        name: "Гарантированное наличие товара на складе",
        path: "src/assets/img/about/in-stock.png",
        id: 2,
    },
    {
        name: "Производство согласно стандарту ГОСТ",
        path: "src/assets/img/about/cloud.png",
        id: 3,
    },
    {
        name: "Справедливые цены",
        path: "src/assets/img/about/best-price.png",
        id: 4,
    },
];

export default function Benefits() {
    return (
        <>
            <div className="flex flex-col justify-between space-y-12">
                <div className="flex flex-col lg:flex-row-reverse lg:justify-between space-y-12 lg:gap-16">
                    <div className="w-full self-center space-y-8 mt-8 lg:w-1/2 ">
                        <div className="text space-y-4">
                            <h2 className="text-xl uppercase">О компании</h2>
                            <p className="">
                                Металлургическая компания ТОО «Казахстанский
                                Завод Медных Сплавов» является одним из лидеров
                                по производству и продаже медесодержащей
                                продукции, из сырья вторичных металлов (лома и
                                отходов цветных металлов) в Республике
                                Казахстан.
                            </p>
                            <p className="">
                                Компания реализует программы рационального
                                использования природных ресурсов и защиты
                                окружающей среды, которые позволяют повышать
                                экологическую безопасность производства.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full -order-1 lg:w-1/2">
                        <img
                            className="img h-full object-cover rounded-lg"
                            src="src/assets/img/home/home2.jpg"
                            alt=""
                        ></img>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-x-16">
                    {benefits.map((benefit) => (
                        <div
                            className="flex flex-col gap-2 text-center items-center"
                            key={benefit.id}
                        >
                            <div className="img flex justify-center items-center w-16">
                                <img
                                    src={benefit.path}
                                    className="h-full object-cover"
                                ></img>
                            </div>
                            <p className="">{benefit.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
