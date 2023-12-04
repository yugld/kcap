export default function InitProducts() {
    return (
        <section className="diagramContent">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-16 py-16">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:gap-16">
                    <div className="w-full space-y-8 mt-8 lg:w-1/2 ">
                        <div className="text space-y-4">
                            <h2 className="text-xl uppercase">
                                ВЫПУСКАЕМАЯ ПРОДУКЦИЯ
                            </h2>

                            <p className="">
                                На предприятии используется современное
                                высокотехнологичное оборудование, благодаря чему
                                наша команда из опытных квалифицированных
                                специалистов используя передовые технологии
                                металлургии, достигает высокого качества
                                продукции удовлетворяя требования потребителя
                                нашей продукции.
                            </p>
                            <p className="">
                                Мы рады будем сотрудничеству со всеми
                                металлообрабатывающими предприятиями, а так же с
                                компаниями заинтересованными в продукции нашей
                                компании.
                            </p>
                            <div className="flex flex-col gap-2">
                                <p>По вопросам приобретения продукции:</p>
                                <ul>
                                    <li>
                                        тел.{" "}
                                        <a
                                            target="_blanck"
                                            href="tel:+77012639421"
                                            className="hover:text-primary"
                                        >
                                            +7 701 263 94 21
                                        </a>
                                    </li>
                                    <li>
                                        email:{" "}
                                        <a
                                            target="_blanck"
                                            href="mailto:a.atentay@kcap.kz"
                                            className="hover:text-primary"
                                        >
                                            a.atentay@kcap.kz
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <img
                            className="img h-full object-cover rounded-lg"
                            src="src/assets/img/home/home4.jpg"
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
