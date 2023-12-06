export default function Leader() {
    return (
        <>
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 py-16 flex flex-col lg:flex-row lg:justify-between space-y-12 lg:gap-16">
                <div className="flex w-full lg:w-1/2">
                    <img
                        className="img h-full object-cover rounded-lg"
                        src="src/assets/img/home/home4.jpg"
                        alt=""
                    ></img>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="text space-y-4 self-center">
                        <h2 className="text-xl uppercase">
                            Лидер по производству
                        </h2>
                        <p className="">
                            В своей деятельности ТОО «Казахстанский Завод Медных
                            Сплавов» руководствуется принципами устойчивого
                            развития и внедряет лучшие практики в области охраны
                            природы, социальной ответственности и корпоративного
                            управления.
                        </p>
                        <p className="">
                            Система управления компании базируется на строгом
                            соблюдении законодательства и обеспечении социальных
                            гарантий сотрудникам. Продукция производится
                            согласно стандарту ГОСТ и/или ТУ заказчика.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
