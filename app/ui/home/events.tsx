// components/EventsSection.tsx
import Image from "next/image";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      type: "In-Person",
      title: "Tech Talent Mixer 2025",
      date: "March 15, 2025 • 2:00 PM",
      location: "San Francisco Innovation Center",
      registered: 42,
      image: "/job-card-1.png",
      typeColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      type: "Virtual",
      title: "Virtual Career Connect",
      date: "March 18, 2025 • 10:00 AM",
      location: "Zoom Meeting",
      registered: 127,
      image: "/job-card-2.png",
      typeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      type: "Virtual",
      title: "Spring Tech Fair 2025",
      date: "March 25, 2025 • 1:00 PM",
      location: "NYC Tech Campus",
      registered: 78,
      image: "/job-card-3.png",
      typeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      type: "In-Person",
      title: "Tech Talent Mixer 2025",
      date: "March 15, 2025 • 2:00 PM",
      location: "San Francisco Innovation Center",
      registered: 42,
      image: "/job-card-4.png",
      typeColor: "bg-green-100 text-green-800",
    },
    {
      id: 5,
      type: "Virtual",
      title: "Virtual Career Connect",
      date: "March 18, 2025 • 10:00 AM",
      location: "Zoom Meeting",
      registered: 127,
      image: "/job-card-5.png",
      typeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 6,
      type: "Virtual",
      title: "Spring Tech Fair 2025",
      date: "March 25, 2025 • 1:00 PM",
      location: "NYC Tech Campus",
      registered: 78,
      image: "/job-card-6.png",
      typeColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <section className="bg-white pt-10 pb-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events
          </h2>
          <p className="text-xl text-gray-600">
            Employer events, workshops, and trainings.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Event Type Badge */}
              <div className="w-full py-3 sm:py-4 px-4 sm:px-5">
                <span
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${event.typeColor}`}
                >
                  {event.type}
                </span>

                {/* Event Image */}
                <div className="relative h-24 sm:h-20 md:h-24 flex items-center justify-center mt-3 sm:mt-4 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={`${event.title} event`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="flex flex-col">
                <div className="px-4 sm:px-5 py-2 sm:py-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                  <p className="text-gray-600 text-sm mb-4 sm:mb-6">{event.location}</p>
                </div>

                {/* Registration Info and Button */}
                <div className="border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2 py-3 sm:py-4 px-4 sm:px-5">
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      <span>{event.registered} Registered</span>
                    </div>
                    <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
