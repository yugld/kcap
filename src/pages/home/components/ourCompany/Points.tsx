const points = [
    {
        number: "1997",
        text: "Успешный опыт работы c 1997",
        id: 1,
    },
    {
        number: "300",
        text: "Диапозон массы отливок 300 тонн",
        id: 2,
    },
    {
        number: "400",
        text: "Мощность 400 тонн/месяц",
        id: 3,
    },
];

export default function Points() {
    return (
        <div className="bg-black p-16">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-x-16">
                    {points.map(({ number, text, id }) => (
                        <div
                            className="flex flex-col gap-2 text-center items-center"
                            key={id}
                        >
                            <p className="text-primary text-3xl">{number}</p>
                            <p className="text-white">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
