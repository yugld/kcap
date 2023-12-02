export default function AboutHome() {
    return (
        <section className="about flex items-center">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-6 py-6 ">
                <div className="flex flex-col justify-between space-y-8 text-white">
                    <div className="flex flex-col w-full lg:w-1/2 space-y-8 mt-8">
                        <p className="text-xl uppercase">
                            объединяем лучших <br></br> в своем деле
                        </p>
                    </div>
                    <div className="flex w-full">
                        <img
                            className="img object-cover rounded-lg"
                            src="src\assets\img\home\home4.jpg"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
