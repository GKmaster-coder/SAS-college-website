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
    image: "https://plus.unsplash.com/premium_photo-1714397507055-b74c159c8d5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Discover Your Potential",
    description:
      "Explore diverse programs and vibrant campus life designed to inspire your journey.",
    cta: "Explore Programs",
    ctaLink: "#programs",
    image: "https://i.pinimg.com/736x/1f/9f/08/1f9f08c6f7ba5fbdf552ee8aabe394ed.jpg",
  },
  {
    title: "Join a Thriving Community",
    description:
      "Become part of a network that fosters innovation, leadership, and lifelong friendships.",
    cta: "Request Info",
    ctaLink: "#info",
    image: "https://images.pexels.com/photos/31968829/pexels-photo-31968829/free-photo-of-cheerful-group-of-friends-celebrating-in-white-shirts.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function HomeBanner() {
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
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-gradient-to-r from-[#7b4e32] to-[#a06f4c] text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                >
                  {slide.cta}
                </a>
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
