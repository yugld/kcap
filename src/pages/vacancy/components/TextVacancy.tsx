import FormVacancy from "./FormVacancy";

export default function TextVacancy() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:gap-16">
            <div className="headline flex flex-col justify-center gap-6 w-full lg:w-2/3">
                <h2 className="text-lg leading-snug font-bold italic">
                    Вам работа! ⭐
                </h2>
                <span className="text-xl leading-snug font-bold italic">
                    Присоединяйтесь к нашей команде
                </span>
                <div className="flex flex-col space-y-4">
                    <p>
                        ТОО «Казахстанский Завод Медных Сплавов» - лидер в
                        производстве и продаже медной продукции в Казахстане. Мы
                        придерживаемся высоких стандартов качества и заботимся о
                        окружающей среде. Продвигаем устойчивое развитие и
                        социальную ответственность.
                    </p>
                    <p>
                        Присоединяйтесь к нам, если вы разделяете наши ценности
                        и хотите делать важное дело для общества и природы.
                    </p>
                    <p>
                        Откликайтесь на вакансию в{" "}
                        <a
                            href="https://spb.hh.ru/employer/9179408?"
                            className="text-primary cursor-pointer hover:border-b hover:border-primary"
                        >
                            Headhunter (HH)
                        </a>
                        .
                    </p>
                </div>
            </div>
            <FormVacancy />
        </div>
    );
}
