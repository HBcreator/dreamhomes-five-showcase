import { Link } from "react-router-dom";
import { MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  description: string;
}

const PropertyCard = ({ id, image, name, location, price, description }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <DollarSign className="h-5 w-5" />
            <span>{price}</span>
          </div>
          
          <Link to={`/property/${id}`}>
            <Button variant="gold" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
