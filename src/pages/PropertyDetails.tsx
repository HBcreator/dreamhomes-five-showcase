import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Bed, Bath, Car, Ruler, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyById } from "@/data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  
  if (!id) {
    return <Navigate to="/properties" replace />;
  }

  const property = getPropertyById(id);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image */}
      <section 
        className="relative h-[500px] flex items-end"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${property.image})`,
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
                  {property.fullDescription}
                </p>
              </div>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
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

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
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
                        alt={`${property.name} view ${index + 1}`}
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
                        placeholder={`I'm interested in ${property.name}...`}
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
