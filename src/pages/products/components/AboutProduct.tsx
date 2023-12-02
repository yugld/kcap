const types = [
    {
        title: "Химический состав",
        text: "Химический состав продукции соответствует требованиям стандарта ГОСТ 1020-97 и сопровождается сертификатами или паспортом качества. Стандарт распространяется на слитки литейной латуни.",
        img: "src/assets/img/products/4.jpg",
        id: 1,
    },
    {
        title: "Сырье для производства",
        text: "Основным сырьем для производства слитков является лом и отходы цветных металлов и сплавов. Вес каждого слитка составляет не более 42 кг. Слитки латунные предназначены для дальнейшей переплавки. Полученный расплав используют для изготовления деталей литьем.",
        img: "src/assets/img/products/2.jpg",
        id: 2,
    },
    {
        title: "Отличия сплава",
        text: "Сплав в отличие от чистой меди более упругий, прочный и хорошо переносит взаимодействие с влагой. Многокомпонентные сплавы получают путем добавления в расплав свинца, олова и других веществ. ",
        img: "src/assets/img/products/3.jpg",
        id: 3,
    },
    {
        title: "Виды латуни",
        text: "Наша компания производит, по заказу потребителя, различные виды марок латуни ЛАЖМц, ЛКС,  ЛСч, ЛС, Лос, ЛМцС, ЛЦ. (А-Алюминий, Ж-Железо, О-Олово, С-Свинец, К-Кремний, Мц-Марганец, Л-Основной компонент медь).                            ",
        img: "src/assets/img/products/1.jpg",
        id: 4,
    },
];

export default function AboutProduct() {
    return (
        <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 py-6">
            <div className="flex flex-col justify-between space-y-8 ">
                <h2 className="text-xl uppercase border-b border-primary w-fit">
                    Латунь в слитках
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 sm:gap-x-16">
                    {types.map((type) => (
                        <div
                            className="flex flex-col gap-2 text-center rounded-lg group overflow-hidden bg-center bg-no-repeat bg-cover"
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
