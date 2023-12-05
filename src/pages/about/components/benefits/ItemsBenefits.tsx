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

export default function ItemsBenefits() {
    return (
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
    );
}
