import { useState } from 'react'
import Button from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import Textarea from "../components/ui/Textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@radix-ui/react-select'

export default function AddCityUpdate() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    imageUrl: '',
    location: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get existing updates from localStorage
    const existingUpdates = JSON.parse(localStorage.getItem('cityUpdates') || '[]')
    
    // Add new update with timestamp
    const newUpdate = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    
    // Save back to localStorage
    localStorage.setItem('cityUpdates', JSON.stringify([...existingUpdates, newUpdate]))
    
    // Reset form
    setFormData({
      title: '',
      category: '',
      description: '',
      imageUrl: '',
      location: ''
    })
    
    alert('City update saved successfully!')
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add City Update</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter update title"
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={handleSelectChange} value={formData.category} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="news">News</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="alert">Alert</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter detailed description"
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter location or address"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full">
            Submit Update
          </Button>
        </div>
      </form>

      {formData.imageUrl && (
        <div className="mt-6">
          <h3 className="font-medium mb-2">Image Preview</h3>
          <div className="border rounded-md overflow-hidden">
            <img 
              src={formData.imageUrl} 
              alt="Preview" 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18d8e6b8e9a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18d8e6b8e9a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.0859375%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}