import Button from "../components/ui/Button"

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  onDelete?: (id: number) => void; // optional delete handler
}

function EventCard({
  id,
  title = "Concert Night",
  date = "June 15, 2023",
  location = "Main Auditorium",
  description = "Join us for an unforgettable night of music featuring top artists from around the world.",
  imageUrl,
  onDelete
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-1"><span className="font-medium">Date:</span> {date}</p>
        <p className="text-gray-500 mb-4"><span className="font-medium">Location:</span> {location}</p>
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
          {onDelete && (
            <Button 
              className="w-full bg-red-500 hover:bg-red-600"
              onClick={() => onDelete(id!)} // non-null assertion since we expect id when deletable
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCard;
