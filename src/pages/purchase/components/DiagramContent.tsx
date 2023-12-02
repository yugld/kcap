import Diagram from "./Diagram";

export default function DiagramContent() {
    return (
        <section className="diagramContent">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-16 py-24 pt-[100px]">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:gap-16">
                    <div className="w-full space-y-8 mt-8 lg:w-1/2 ">
                        <div className="text space-y-4">
                            <h2 className="text-xl uppercase">
                                Закупаем сырье
                            </h2>

                            <p className="">
                                <span className="text-lg font-medium text-primary">
                                    Лом латуни{" "}
                                </span>
                                является двухкомпонентным металлом, в основе
                                которого содержится медь и цинк, состоящий из
                                различных изделий и фрагментов, образовавшихся в
                                результате производства деталей, механизмов, а
                                также вышедших из строя технических и бытовых
                                изделий.
                            </p>
                            <div className="">
                                <p>
                                    По вопросам поставки лома обращаться к
                                    менеджеру по закупу <br></br>Аблай Атентай:
                                </p>
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
                    <Diagram />
                </div>
            </div>
        </section>
    );
}
