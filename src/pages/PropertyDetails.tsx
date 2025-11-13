import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Bed, Bath, Car, Ruler, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import property3 from "@/assets/property-3.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const PropertyDetails = () => {
  const { id } = useParams();

  // In a real app, you'd fetch this data based on the ID
  const property = {
    name: "Coastal Dream Villa",
    location: "Ocean View Heights, California",
    price: "2,850,000",
    description: "Experience unparalleled luxury in this stunning oceanfront villa. This architectural masterpiece seamlessly blends contemporary design with natural beauty, offering breathtaking panoramic views of the Pacific Ocean. The property features floor-to-ceiling windows that flood the space with natural light, an infinity pool that appears to merge with the horizon, and expansive outdoor living areas perfect for entertaining. Every detail has been carefully curated to create a sanctuary of sophistication and tranquility.",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    area: "4,500 sq ft",
    images: [property3, interior1, interior2, property3, interior1, interior2]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image */}
      <section 
        className="relative h-[500px] flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${property3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 pb-12">
          <Link to="/properties">
            <Button variant="secondary" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-primary-foreground mb-2">{property.name}</h1>
          <div className="flex items-center gap-2 text-primary-foreground/90 text-lg">
            <MapPin className="h-5 w-5" />
            <span>{property.location}</span>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-primary">${property.price}</span>
                </div>

                <h2 className="text-2xl font-bold mb-4">Property Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-accent/10 p-3 rounded-full mb-2">
                        <Bed className="h-6 w-6 text-accent" />
                      </div>
                      <span className="font-semibold">{property.bedrooms}</span>
                      <span className="text-sm text-muted-foreground">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-accent/10 p-3 rounded-full mb-2">
                        <Bath className="h-6 w-6 text-accent" />
                      </div>
                      <span className="font-semibold">{property.bathrooms}</span>
                      <span className="text-sm text-muted-foreground">Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-accent/10 p-3 rounded-full mb-2">
                        <Car className="h-6 w-6 text-accent" />
                      </div>
                      <span className="font-semibold">{property.parking}</span>
                      <span className="text-sm text-muted-foreground">Parking</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-accent/10 p-3 rounded-full mb-2">
                        <Ruler className="h-6 w-6 text-accent" />
                      </div>
                      <span className="font-semibold">{property.area}</span>
                      <span className="text-sm text-muted-foreground">Area</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Property Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`Property view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in this property..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" variant="gold">
                      Send Inquiry
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Or call us directly:
                    </p>
                    <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
