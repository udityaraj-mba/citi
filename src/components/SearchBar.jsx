import { useState, ChangeEvent } from 'react';
import { Input } from "/components/ui/Input";
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  delay?: number;
}

export default function SearchBar({ 
  placeholder = "Search...", 
  onSearch, 
  delay = 300 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  let timeoutId: NodeJS.Timeout;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Clear previous timeout
    clearTimeout(timeoutId);
    
    // Set new timeout to trigger search after delay
    timeoutId = setTimeout(() => {
      onSearch(value);
    }, delay);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="pl-10 w-full"
      />
    </div>
  );
}