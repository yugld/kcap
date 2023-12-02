export default function OurProducts() {
    return (
        <section className="ourProducts h-screen flex items-center">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-6 py-6 ">
                <div className="flex flex-col lg:flex-row-reverse lg:justify-between space-y-12 lg:gap-16 text-white">
                    <div className="flex flex-col w-full self-center lg:w-1/3 space-y-8 mt-8">
                        <p className="text-xl uppercase">
                            Наша компания производит по заказу потребителя
                            различные виды марок латуни ЛАЖМц, ЛКС, ЛСч, ЛС,
                            Лос, ЛМцС, ЛЦ
                        </p>
                    </div>
                    <div className="flex w-full lg:w-2/3">
                        <img
                            className="img h-full object-cover rounded-lg"
                            src="src\assets\img\home\home3.jpg"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
