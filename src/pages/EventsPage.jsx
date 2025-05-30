import { useState } from 'react';
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Checkbox } from "../components/ui/Checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Button from "../components/ui/Button";

// SearchBar Component
function SearchBar({ onSearch, placeholder = "Search...", className = "" }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      className={className}
    />
  );
}

// Filters Component
function Filters({ onChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const categories = ['Music', 'Sports', 'Workshops', 'Festivals'];

  const handleCheckboxChange = (category, checked) => {
    const isChecked = typeof checked === 'boolean' ? checked : !!checked;
    const newFilters = isChecked
      ? [...selectedFilters, category]
      : selectedFilters.filter(item => item !== category);
    setSelectedFilters(newFilters);
    onChange(newFilters);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Filter Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map(category => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`filter-${category.toLowerCase()}`}
              checked={selectedFilters.includes(category)}
              onCheckedChange={(checked) => handleCheckboxChange(category, checked)}
            />
            <Label htmlFor={`filter-${category.toLowerCase()}`}>
              {category}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// EventCard Component
function EventCard({
  title = "Concert Night",
  date = "June 15, 2023",
  location = "Main Auditorium",
  description = "Join us for an unforgettable night of music.",
  imageUrl,
  category
}) {
  return (
    <Card className="h-full">
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
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-1">{date}</p>
        <p className="text-gray-500 mb-4">{location}</p>
        <p className="text-gray-700 mb-6">{description}</p>
        <Button className="w-full">Book Now</Button>
      </CardContent>
    </Card>
  );
}

// Main EventsPage Component
export default function EventsPage() {
  const [events] = useState([
    {
      id: '1',
      title: 'Jazz Night',
      description: 'An evening of smooth jazz with local artists',
      date: '2023-11-15',
      location: 'City Jazz Club',
      category: 'Music'
    },
    {
      id: '2',
      title: 'Marathon',
      description: 'Annual city marathon through downtown',
      date: '2023-11-20',
      location: 'Central Park',
      category: 'Sports'
    },
    {
      id: '3',
      title: 'Photography Workshop',
      description: 'Learn professional photography techniques',
      date: '2023-11-25',
      location: 'Arts Center',
      category: 'Workshops'
    },
    {
      id: '4',
      title: 'Food Festival',
      description: 'Taste cuisine from around the world',
      date: '2023-12-02',
      location: 'Downtown Square',
      category: 'Festivals'
    },
    {
      id: '5',
      title: 'Rock Concert',
      description: 'Popular rock bands performing live',
      date: '2023-12-10',
      location: 'Arena Stadium',
      category: 'Music'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(event.category);
    
    return matchesSearch && matchesCategories;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <SearchBar 
            onSearch={setSearchQuery} 
            placeholder="Search events..." 
            className="mb-6"
          />
          <Filters onChange={setSelectedCategories} />
        </div>

        <div className="lg:w-3/4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map(event => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  category={event.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">
                No events match your search criteria
              </h3>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
