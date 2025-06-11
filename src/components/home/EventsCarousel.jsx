import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock event data (replace with your actual data fetching logic)
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      try {
        const mockEvents = [
          {
            id: 1,
            title: 'Herbal Medicine Workshop',
            date: '2025-07-10',
            time: '10:00 AM',
            location: 'Main Auditorium',
            description: 'Learn the art of herbal medicine preparation and application.',
            image: 'https://i.pinimg.com/736x/df/3c/4c/df3c4c976de3453c136715eaa77c5618.jpg',
          },
          {
            id: 2,
            title: 'Free Health Camp',
            date: '2025-07-15',
            time: '9:00 AM - 2:00 PM',
            location: 'Campus Grounds',
            description: 'Free health check-up and Ayurvedic consultation for all.',
            image: 'https://i.pinimg.com/736x/f7/b3/8f/f7b38f8b2abf570b1671d0f4dd397614.jpg',
          },
          {
            id: 3,
            title: 'Yoga Awareness Seminar',
            date: '2025-07-20',
            time: '8:00 AM',
            location: 'Yoga Hall',
            description: 'An expert-led seminar on the benefits of daily yoga.',
            image: 'https://i.pinimg.com/736x/1a/f6/7f/1af67f67ceeeb186590b0044ae89ffdd.jpg',
          },
          {
            id: 4,
            title: 'Ayurveda Day Celebration',
            date: '2025-08-01',
            time: '11:00 AM',
            location: 'Conference Hall',
            description: 'Celebrate Ayurveda Day with guest lectures and cultural programs.',
            image: 'https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/10/National-Ayurveda-Day.jpg',
          },
        ];

        setEvents(mockEvents);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000); // Simulate a 1-second delay
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-600">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Upcoming College Events
      </h2>
      {events.length > 0 ? (
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="px-4">
              <div className="event-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 transform scale-95">
                <img
                  className="w-full h-50 object-cover object-top"
                  src={event.image}
                  alt={event.title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    , {event.time}
                  </p>
                  <p className="text-gray-600 mb-4">{event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                  {/* Optional: Add a "Learn More" button */}
                  <a
                    href="#"
                    className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center items-center h-48">
          <p className="text-gray-600">No events currently scheduled.</p>
        </div>
      )}

      {/* Center card popup effect */}
      <style jsx global>{`
        .slick-slide > div {
          display: flex;
          justify-content: center;
        }

        .slick-center .event-card {
          transform: scale(1.05);
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default EventsCarousel;
