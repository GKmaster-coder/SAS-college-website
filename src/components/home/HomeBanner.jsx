import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Welcome to Our Prestigious College",
    description:
      "Empowering students to achieve academic excellence and personal growth through a supportive community.",
    cta: "Apply Now",
    ctaLink: "#apply",
    image:
      "https://plus.unsplash.com/premium_photo-1714397507055-b74c159c8d5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Discover Your Potential",
    description:
      "Explore diverse programs and vibrant campus life designed to inspire your journey.",
    cta: "Apply Now",
    ctaLink: "#programs",
    image:
      "https://i.pinimg.com/736x/5b/e8/b8/5be8b87d226a4c44e815cce70448c930.jpg",
  },
  {
    title: "Join a Thriving Community",
    description:
      "Become part of a network that fosters innovation, leadership, and lifelong friendships.",
    cta: "Apply Now",
    ctaLink: "#info",
    image:
      "https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function HomeBanner({ onApplyClick }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen max-h-[800px] flex items-center justify-center sm:justify-start px-6 sm:px-16 lg:px-24 text-white relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="z-10 text-center md:text-left max-w-2xl space-y-6 animate-fadeIn">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-light drop-shadow-md">
                  {slide.description}
                </p>
                <button
                  onClick={onApplyClick}
                  className="inline-block bg-gradient-to-r from-[#7b4e32] to-[#a06f4c] text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !hidden sm:!flex items-center justify-center !w-10 !h-10 !text-white bg-black/30 backdrop-blur-sm rounded-full !left-4 hover:bg-black/50 transition-all" />
        <div className="swiper-button-next !hidden sm:!flex items-center justify-center !w-10 !h-10 !text-white bg-black/30 backdrop-blur-sm rounded-full !right-4 hover:bg-black/50 transition-all" />

        {/* Pagination */}
        <div className="swiper-pagination !bottom-6 text-white z-50" />
      </Swiper>
    </section>
  );
}
