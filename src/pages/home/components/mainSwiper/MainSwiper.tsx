import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperData } from "./swiperData";
import "swiper/css";

SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function MainSwiper() {
    return (
        <div className="relative h-screen">
            <Swiper
                effect={"fade"}
                className="mySwiper max-h-screen min-w-full overflow-hidden"
            >
                {swiperData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="flex h-screen items-end w-full bg-cover"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                            }}
                        >
                            <div className="text-white z-10 mb-40 mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3">
                                <h1 className="text-2xl font-bold">
                                    {slide.title}
                                </h1>
                                <span className="text-xl">{slide.text}T</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
