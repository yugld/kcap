const points = [
    {
        text: "Инвестируя средства в металлургическое производство в Республике Казахстан, мы вносим вклад в социально-экономическое развитие Республики.",
        id: 1,
    },
    {
        text: "Стремление предоставить продукцию удовлетворяющую требования и потребности потребителя нашей продукции.",
        id: 2,
    },
    {
        text: "Предприятие расположено в близи крупного мегаполиса и имеет системообразующее значение для локальной экономики и социальной сферы региона.",
        id: 3,
    },
    {
        text: "Мы развиваем компанию с высоким потенциалом осуществляя ответственную, динамичную, инновационную деятельность!",
        id: 4,
    },
];

export default function Strategy() {
    return (
        <div className="flex flex-col justify-between space-y-12">
            <h2 className="text-xl uppercase">Стратегия</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 ">
                {points.map((point) => (
                    <p
                        className="border-primary p-4 border-t border-l rounded-tl-lg"
                        key={point.id}
                    >
                        {point.text}
                    </p>
                ))}
            </div>
        </div>
    );
}
