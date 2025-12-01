import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

const sliderImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
]

const HeroSection = () => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="hero-section">
            <div ref={prevRef} className="slider-arrow slider-arrow-prev">‹</div>
            <div ref={nextRef} className="slider-arrow slider-arrow-next">›</div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="Slider Image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default HeroSection;