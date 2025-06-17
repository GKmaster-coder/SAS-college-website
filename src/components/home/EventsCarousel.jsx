import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const mockEvents = [
          {
            id: 1,
            title: 'Herbal Medicine Workshop',
            date: '2025-07-10',
            time: '10:00 AM',
            location: 'Main Auditorium',
            description: 'Learn the art of herbal medicine preparation and application from renowned experts in the field.',
            image: 'https://i.pinimg.com/736x/df/3c/4c/df3c4c976de3453c136715eaa77c5618.jpg',
          },
          {
            id: 2,
            title: 'Free Health Camp',
            date: '2025-07-15',
            time: '9:00 AM - 2:00 PM',
            location: 'Campus Grounds',
            description: 'Free health check-up and Ayurvedic consultation for all attendees with our expert practitioners.',
            image: 'https://i.pinimg.com/736x/f7/b3/8f/f7b38f8b2abf570b1671d0f4dd397614.jpg',
          },
          {
            id: 3,
            title: 'Yoga Awareness Seminar',
            date: '2025-07-20',
            time: '8:00 AM',
            location: 'Yoga Hall',
            description: 'An expert-led seminar on the benefits of daily yoga practice for mind and body wellness.',
            image: 'https://i.pinimg.com/736x/1a/f6/7f/1af67f67ceeeb186590b0044ae89ffdd.jpg',
          },
          {
            id: 4,
            title: 'Ayurveda Day Celebration',
            date: '2025-08-01',
            time: '11:00 AM',
            location: 'Conference Hall',
            description: 'Celebrate Ayurveda Day with guest lectures, cultural programs, and traditional remedies showcase.',
            image: 'https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/10/National-Ayurveda-Day.jpg',
          },
          {
            id: 5,
            title: 'Meditation Retreat',
            date: '2025-08-10',
            time: '6:00 AM',
            location: 'Peace Garden',
            description: 'Experience deep meditation techniques guided by our spiritual mentors in nature.',
            image: 'https://i.pinimg.com/736x/5b/4c/4e/5b4c4e9c9c1b5e5e5e5e5e5e5e5e5e5e.jpg',
          },
        ];
        setEvents(mockEvents);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-green-200 h-12 w-12"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-red-50 rounded-lg mx-4">
        <p className="text-red-600 font-medium text-lg">
          Error loading events: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-green-700 to-green-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-yellow-200"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-blue-200"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
          Upcoming <span className="text-yellow-300">College Events</span>
        </h2>
        <p className="text-center text-green-100 text-lg mb-12 max-w-2xl mx-auto">
          Discover our upcoming workshops, seminars, and health initiatives
        </p>

        {events.length > 0 ? (
          <Slider {...settings}>
            {events.map((event) => (
              <div key={event.id} className="px-2 focus:outline-none">
                <div className="event-card bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 flex flex-col h-[560px]">
                  <div className="relative overflow-hidden h-60">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      src={event.image}
                      alt={event.title}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-green-700 mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="mt-auto">
                      <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                        Register Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center py-16 bg-white bg-opacity-10 rounded-xl">
            <svg className="w-16 h-16 mx-auto text-yellow-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-white">No upcoming events</h3>
            <p className="text-green-100 mt-2">Check back later for our next schedule</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .slick-slide > div {
          padding: 10px 0;
        }

        .slick-center .event-card {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .slick-dots li button:before {
          color: white;
          opacity: 0.5;
          font-size: 10px;
        }

        .slick-dots li.slick-active button:before {
          color: #fde047;
          opacity: 1;
        }

        .slick-prev:before, .slick-next:before {
          color: white;
          font-size: 28px;
        }

        .slick-prev {
          left: -40px;
        }

        .slick-next {
          right: -40px;
        }
      `}</style>
    </div>
  );
};

export default EventsCarousel;
