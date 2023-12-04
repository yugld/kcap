const vacancies = [
    {
        title: "Технолог-металлург",
        href: "https://spb.hh.ru/vacancy/89467895?from=employer&hhtmFrom=employer",
        id: 1,
    },
];

export default function OpenVacancy() {
    return (
        <ul className="flex flex-col lg:justify-between gap-4">
            {vacancies.map((vacancy) => (
                <li>
                    <a
                        href={vacancy.href}
                        target="_blank"
                        className="text-lg text-primary cursor-pointer border-b border-primary hover:text-hover hover:border-hover"
                    >
                        {vacancy.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
