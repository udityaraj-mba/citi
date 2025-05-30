import { Button } from "/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  category?: string;
  imageUrl?: string;
}

export default function EventCard({
  title = "Concert Night",
  date = "June 15, 2023",
  location = "Main Auditorium",
  description = "Join us for an unforgettable night of music featuring top artists from around the world.",
  category = "General",
  imageUrl
}: Partial<EventCardProps>) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
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
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {category}
        </span>
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
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Book Now Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Book Now
        </Button>
      </div>
    </div>
  )
}