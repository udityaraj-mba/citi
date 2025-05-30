import { Button } from "/components/ui/button"

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

function EventCard({
  title = "Concert Night",
  date = "June 15, 2023",
  location = "Main Auditorium",
  description = "Join us for an unforgettable night of music featuring top artists from around the world.",
  imageUrl
}: Partial<EventCardProps>) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white h-full flex flex-col">
      {/* Event Image */}
      <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-lg">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Event Image
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Event Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>

        {/* Event Date */}
        <p className="text-gray-500 mb-1">
          <span className="font-medium">Date:</span> {date}
        </p>

        {/* Event Location */}
        <p className="text-gray-500 mb-4">
          <span className="font-medium">Location:</span> {location}
        </p>

        {/* Event Description */}
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>

        {/* Book Now Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-auto">
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default function EventsList() {
  // Dummy event data
  const events = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "July 20-22, 2023",
      location: "Convention Center",
      description: "Annual technology conference featuring industry leaders and cutting-edge innovations in AI, blockchain, and cloud computing."
    },
    {
      id: 2,
      title: "Jazz in the Park",
      date: "August 5, 2023",
      location: "Central Park Amphitheater",
      description: "Outdoor jazz festival with performances from renowned musicians. Bring your picnic blankets and enjoy the music under the stars."
    },
    {
      id: 3,
      title: "Food & Wine Festival",
      date: "September 10-12, 2023",
      location: "Downtown Square",
      description: "Sample gourmet foods and fine wines from local and international vendors. Cooking demonstrations by celebrity chefs."
    },
    {
      id: 4,
      title: "Marathon Challenge",
      date: "October 15, 2023",
      location: "City Streets",
      description: "Annual marathon with routes through scenic parts of the city. Options for full marathon, half marathon, and 5K fun run."
    },
    {
      id: 5,
      title: "Winter Art Fair",
      date: "December 2-4, 2023",
      location: "Art Gallery District",
      description: "Holiday art fair featuring works from local artists. Perfect for finding unique gifts while supporting the arts community."
    },
    {
      id: 6,
      title: "Startup Pitch Night",
      date: "November 8, 2023",
      location: "Innovation Hub",
      description: "Emerging startups pitch their ideas to investors. Networking opportunities for entrepreneurs and tech enthusiasts."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </div>
  )
}