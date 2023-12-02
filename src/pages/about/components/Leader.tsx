export default function Leader() {
    return (
        <>
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between space-y-12 lg:gap-16">
                <div className="w-full self-center space-y-8 mt-8 lg:w-1/2 ">
                    <div className="text space-y-4">
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
                <div className="flex w-full -order-1 lg:w-1/2">
                    <img
                        className="img h-full object-cover rounded-lg"
                        src="src/assets/img/home/home4.jpg"
                        alt=""
                    ></img>
                </div>
            </div>
        </>
    );
}
