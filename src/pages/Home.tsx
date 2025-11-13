import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import { properties } from "@/data/properties";

const Home = () => {
  // Featured properties - first 3
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Find Your Dream Home With Us
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover exceptional properties tailored to your lifestyle. Your perfect home awaits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/properties">
              <Button variant="gold" size="lg">
                Explore Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties available now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="outline" size="lg">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose DreamHomes Realty</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine expertise, dedication, and personalized service to help you find your perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
                <p className="text-sm text-muted-foreground">
                  Every property is thoroughly verified and inspected for quality assurance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">
                  Recognized as a leading real estate agency with multiple industry awards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Professional agents with years of experience in the real estate market
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Access to comprehensive market data and investment opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from satisfied homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "DreamHomes Realty made our home buying journey seamless. Their team was professional, knowledgeable, and always available to answer our questions."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Homeowner, Green Valley</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "I sold my property in record time thanks to their excellent marketing strategy and negotiation skills. Highly recommend their services!"
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Seller, Downtown</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "From our first viewing to closing, everything was handled professionally. We found our dream home and couldn't be happier with the experience."
                </p>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Homeowner, Ocean View</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
