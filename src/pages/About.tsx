import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";

const About = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Senior Real Estate Broker",
      image: agent1,
      bio: "With over 15 years of experience, Sarah specializes in luxury properties and has helped hundreds of families find their dream homes."
    },
    {
      name: "David Thompson",
      role: "Commercial Property Specialist",
      image: agent2,
      bio: "David's expertise in commercial real estate has made him one of the most trusted advisors for business property investments."
    },
    {
      name: "Maya Patel",
      role: "Residential Sales Manager",
      image: agent3,
      bio: "Maya brings a fresh perspective to real estate with her innovative marketing strategies and dedication to client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About DreamHomes Realty</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner in real estate for over 20 years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded in 2003, DreamHomes Realty was born from a simple belief: everyone deserves to find a place they can truly call home. What started as a small local agency has grown into one of the most respected real estate firms in the region.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past two decades, we've helped thousands of families, investors, and businesses navigate the complex world of real estate. Our commitment to excellence, integrity, and personalized service has remained unchanged since day one.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in every transaction, ensuring the highest standards of service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Your goals are our priority. We focus on understanding and achieving your unique objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Honest, transparent, and ethical practices are the foundation of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  We help you build wealth through smart real estate investments and strategic decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional real estate services that exceed our clients' expectations. We are committed to making the process of buying, selling, or investing in property as smooth, transparent, and rewarding as possible. Through deep market knowledge, innovative technology, and genuine care for our clients' needs, we aim to be the trusted choice for all real estate needs in our community.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the leading real estate agency that transforms the way people experience property transactions. We envision a future where finding your dream property is not just a transaction, but a journey of discovery, empowerment, and fulfillment. We strive to set new standards in customer service, market expertise, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you achieve your real estate goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
                <p className="text-muted-foreground">
                  Our deep understanding of local market trends, neighborhoods, and property values ensures you make informed decisions backed by comprehensive data and insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We take the time to understand your unique needs, preferences, and goals. Every client receives individualized attention and a customized strategy tailored to their situation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  With thousands of successful transactions and countless satisfied clients, our track record speaks for itself. We consistently deliver results that exceed expectations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="text-muted-foreground">
                  From initial consultation to final closing and beyond, we're with you every step of the way. Our comprehensive support includes property search, financing guidance, negotiation, and post-sale assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
