import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function MainSwiper() {
    return (
        <div className="relative h-screen">
            <Swiper
                effect={"fade"}
                className="mySwiper max-h-screen min-w-full overflow-hidden"
            >
                <SwiperSlide>
                    <div className="flex h-screen items-end w-full">
                        <img
                            className="absolute top-0 z-0"
                            src="src\assets\img\home\mainSwiper\initMain.jpg"
                        />
                        <div className="text-white z-10 mb-40 mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3">
                            <h1 className="text-2xl font-bold">KCAP</h1>
                            <span className="text-xl">
                                KCAP KAZAKHSTAN COPPER ALLOYS PLANT
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src\assets\img\home\mainSwiper\init-background.jpeg" />
                </SwiperSlide>
            </Swiper>
            {/* <div className="absolute flex flex-col text-white z-10 right-0 top-1/2 left-1/2 transform -translate-x-[95%] translate-y-1/2">
                <h1 className="text-2xl font-bold">KCAP</h1>
                <span className="text-xl">
                    KCAP KAZAKHSTAN COPPER ALLOYS PLANT
                </span>
            </div> */}
        </div>
    );
}
