const types = [
    {
        title: "Трубка бойлерная латунная",
        text: "Инвестируя средства в металлургическое производство в Республике Казахстан, мы вносим вклад в социально-экономическое развитие Республики.",
        img: "src/assets/img/purchase/pipeline.webp",
        id: 1,
    },
    {
        title: "Радиаторы",
        text: "Стремление предоставить продукцию удовлетворяющую требования и потребности потребителя нашей продукции.",
        img: "src/assets/img/purchase/car-radiator.jpg",
        id: 2,
    },
    {
        title: "Микс латуни",
        text: "Предприятие расположено в близи крупного мегаполиса и имеет системообразующее значение для локальной экономики и социальной сферы региона.",
        img: "src/assets/img/purchase/mix-brass.jpeg",
        id: 3,
    },
    {
        title: "Сантехническое оборудование",
        text: "Мы развиваем компанию с высоким потенциалом осуществляя ответственную, динамичную, инновационную деятельность!",
        img: "src/assets/img/purchase/scrap.jpg",
        id: 4,
    },
];

export default function TypesBrass() {
    return (
        <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-16 py-6">
            <div className="flex flex-col justify-between space-y-12 items-center">
                <h2 className="text-xl uppercase w-2/3 text-center">
                    <span className="text-primary">Виды и сорта</span> лома
                    согласно стандарту ГОСТ 1693-2009
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 sm:gap-x-16">
                    {types.map((type) => (
                        <div
                            className="flex flex-col gap-2 text-center rounded-lg group overflow-hidden"
                            style={{ backgroundImage: `url(${type.img})` }}
                            key={type.id}
                        >
                            <div className="flex flex-col bg-black bg-opacity-75 group-hover:invisible h-full w-full p-4 items-center justify-center gap-2">
                                <p className="text-lg text-primary">
                                    {type.title}
                                </p>
                                <p className="">{type.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
