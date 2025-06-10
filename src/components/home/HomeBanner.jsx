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
      "https://plus.unsplash.com/premium_photo-1714397507055-b74c159c8d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "College campus view",
  },
  {
    title: "Discover Your Potential",
    description:
      "Explore diverse programs and vibrant campus life designed to inspire your journey.",
    cta: "Explore Programs",
    ctaLink: "#programs",
    image:
      "https://i.pinimg.com/736x/1f/9f/08/1f9f08c6f7ba5fbdf552ee8aabe394ed.jpg",
    imageAlt: "Students learning together",
  },
  {
    title: "Join a Thriving Community",
    description:
      "Become part of a network that fosters innovation, leadership, and lifelong friendships.",
    cta: "Request Info",
    ctaLink: "#info",
    image:
      "https://images.pexels.com/photos/31968829/pexels-photo-31968829/free-photo-of-cheerful-group-of-friends-celebrating-in-white-shirts.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Group of students smiling",
  },
];

export default function HomeBanner() {
  return (
    <section className="w-full h-screen max-h-[800px] relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 7000,
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
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[700px] flex items-center justify-center sm:justify-start px-4 sm:px-16 lg:px-24 text-white relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="relative z-10 max-w-3xl text-center md:text-left mx-auto md:mx-0 space-y-6 ">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-xl animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 drop-shadow-md max-w-lg animate-fadeIn delay-100">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-gradient-to-r from-gray-500 to text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 animate-fadeIn delay-200"
                  aria-label={slide.cta}
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !hidden sm:!flex items-center justify-center !w-12 !h-12 !text-white bg-black/30 backdrop-blur-sm rounded-full !left-4 hover:bg-black/50 transition-all" />
        <div className="swiper-button-next !hidden sm:!flex items-center justify-center !w-12 !h-12 !text-white bg-black/30 backdrop-blur-sm rounded-full !right-4 hover:bg-black/50 transition-all" />

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-6 !left-0 !right-0 !mx-auto !w-auto space-x-2" />
      </Swiper>
    </section>
  );
}
