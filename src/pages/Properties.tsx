import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import property7 from "@/assets/property-7.jpg";
import property8 from "@/assets/property-8.jpg";
import property9 from "@/assets/property-9.jpg";
import property10 from "@/assets/property-10.jpg";

const Properties = () => {
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const allProperties = [
    {
      id: "1",
      image: property1,
      name: "Urban Luxury Apartments",
      location: "Downtown Metropolitan",
      price: "750,000",
      description: "Modern luxury living in the heart of the city with stunning views and premium amenities.",
      type: "apartment"
    },
    {
      id: "2",
      image: property2,
      name: "Suburban Family Haven",
      location: "Green Valley Estates",
      price: "580,000",
      description: "Beautiful two-story home perfect for families, featuring a spacious garden and modern interiors.",
      type: "house"
    },
    {
      id: "3",
      image: property3,
      name: "Coastal Dream Villa",
      location: "Ocean View Heights",
      price: "2,850,000",
      description: "Breathtaking oceanfront property with infinity pool and panoramic views of the coastline.",
      type: "villa"
    },
    {
      id: "4",
      image: property4,
      name: "Downtown Penthouse",
      location: "City Center",
      price: "1,200,000",
      description: "Exclusive penthouse with panoramic city views and luxury finishes throughout.",
      type: "apartment"
    },
    {
      id: "5",
      image: property5,
      name: "Historic Townhouse",
      location: "Heritage District",
      price: "680,000",
      description: "Charming brick townhouse with European flair on a tree-lined boulevard.",
      type: "townhouse"
    },
    {
      id: "6",
      image: property6,
      name: "Southwest Ranch Estate",
      location: "Desert Springs",
      price: "495,000",
      description: "Spacious single-story ranch home with expansive yard and mountain backdrop.",
      type: "house"
    },
    {
      id: "7",
      image: property7,
      name: "Mountain Retreat Cabin",
      location: "Pine Forest Reserve",
      price: "425,000",
      description: "Contemporary cabin nestled among tall pines with large viewing deck.",
      type: "cabin"
    },
    {
      id: "8",
      image: property8,
      name: "Colonial Grand Manor",
      location: "Prestige Oaks",
      price: "1,950,000",
      description: "Elegant colonial mansion with columned portico and circular driveway.",
      type: "mansion"
    },
    {
      id: "9",
      image: property9,
      name: "Lakefront Modern Estate",
      location: "Crystal Lake",
      price: "1,450,000",
      description: "Contemporary lakefront home with private dock and floor-to-ceiling windows.",
      type: "villa"
    },
    {
      id: "10",
      image: property10,
      name: "Urban Studio Residence",
      location: "Arts District",
      price: "385,000",
      description: "Sleek minimalist building in the vibrant arts district with modern amenities.",
      type: "apartment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Browse Our Properties</h1>
          <p className="text-xl opacity-90">
            Discover your perfect home from our extensive collection
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="suburban">Suburban</SelectItem>
                  <SelectItem value="coastal">Coastal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-500k">Under $500k</SelectItem>
                  <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                  <SelectItem value="1m+">Over $1M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                className="w-full" 
                variant="gold"
                onClick={() => {
                  setLocation("all");
                  setPriceRange("all");
                  setPropertyType("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{allProperties.length}</span> properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
