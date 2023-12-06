import { benefits } from "./data";

export default function ItemsBenefits() {
    return (
        <div className="bg-black text-white py-16">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-x-16">
                    {benefits.map((benefit) => (
                        <div
                            className="flex flex-col gap-2 text-center items-center"
                            key={benefit.id}
                        >
                            <div className="img flex justify-center items-center w-16">
                                <img
                                    src={benefit.path}
                                    className="h-full object-cover"
                                ></img>
                            </div>
                            <p className="">{benefit.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
