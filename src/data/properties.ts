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
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

export interface Property {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  description: string;
  type: string;
  fullDescription: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: string;
  images: string[];
  features: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    image: property1,
    name: "Urban Luxury Apartments",
    location: "Downtown Metropolitan",
    price: "750,000",
    description: "Modern luxury living in the heart of the city with stunning views and premium amenities.",
    type: "apartment",
    fullDescription: "Experience sophisticated urban living in this stunning luxury apartment building. Located in the heart of downtown, these residences offer breathtaking city views through floor-to-ceiling windows. The modern glass facade reflects contemporary architectural excellence while the interior spaces are designed with comfort and elegance in mind. Residents enjoy access to world-class amenities including a rooftop terrace, fitness center, and concierge services. The location provides easy access to fine dining, entertainment, and business districts, making it perfect for professionals and urban enthusiasts.",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "1,200 sq ft",
    images: [property1, interior1, interior2, property1, interior1, interior2],
    features: [
      "Rooftop terrace with city views",
      "24/7 concierge service",
      "Modern fitness center",
      "Secure underground parking",
      "High-speed elevator access",
      "Smart home technology"
    ]
  },
  {
    id: "2",
    image: property2,
    name: "Suburban Family Haven",
    location: "Green Valley Estates",
    price: "580,000",
    description: "Beautiful two-story home perfect for families, featuring a spacious garden and modern interiors.",
    type: "house",
    fullDescription: "Discover the perfect family home in the desirable Green Valley Estates neighborhood. This charming two-story residence combines contemporary comfort with classic suburban appeal. The open-concept main floor features a gourmet kitchen with modern appliances, flowing seamlessly into a bright living area. Large windows throughout fill the home with natural light. The beautifully landscaped backyard provides a private oasis for family gatherings and children's play. Located in a quiet, family-friendly community with excellent schools nearby, this home offers the ideal setting for creating lasting memories.",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: "2,400 sq ft",
    images: [property2, interior2, interior1, property2, interior2, interior1],
    features: [
      "Spacious backyard with mature trees",
      "Modern open-concept kitchen",
      "Master suite with walk-in closet",
      "Finished basement recreation room",
      "Two-car attached garage",
      "Close to top-rated schools"
    ]
  },
  {
    id: "3",
    image: property3,
    name: "Coastal Dream Villa",
    location: "Ocean View Heights",
    price: "2,850,000",
    description: "Breathtaking oceanfront property with infinity pool and panoramic views of the coastline.",
    type: "villa",
    fullDescription: "Experience unparalleled luxury in this stunning oceanfront villa. This architectural masterpiece seamlessly blends contemporary design with natural beauty, offering breathtaking panoramic views of the Pacific Ocean. The property features floor-to-ceiling windows that flood the space with natural light, an infinity pool that appears to merge with the horizon, and expansive outdoor living areas perfect for entertaining. Every detail has been carefully curated to create a sanctuary of sophistication and tranquility. The open-concept interior showcases high-end finishes, a gourmet kitchen, and luxurious bedroom suites that capture the coastal lifestyle at its finest.",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    area: "4,500 sq ft",
    images: [property3, interior1, interior2, property3, interior1, interior2],
    features: [
      "Infinity pool with ocean views",
      "Private beach access",
      "Floor-to-ceiling windows throughout",
      "Chef's kitchen with premium appliances",
      "Master suite with ocean-view terrace",
      "Smart home automation system"
    ]
  },
  {
    id: "4",
    image: property4,
    name: "Downtown Penthouse",
    location: "City Center",
    price: "1,200,000",
    description: "Exclusive penthouse with panoramic city views and luxury finishes throughout.",
    type: "apartment",
    fullDescription: "Live at the pinnacle of luxury in this exclusive downtown penthouse. Occupying the top floor of a prestigious modern tower, this residence offers 360-degree views of the city skyline. The open-plan living space features soaring ceilings, designer finishes, and a gourmet kitchen equipped with top-of-the-line appliances. The master suite serves as a private retreat with a spa-like bathroom and walk-in closet. Floor-to-ceiling windows frame the dramatic cityscape, while the private terrace provides an outdoor sanctuary high above the urban bustle. This is urban living at its most refined.",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: "2,800 sq ft",
    images: [property4, interior1, interior2, property4, interior1, interior2],
    features: [
      "360-degree city views",
      "Private rooftop terrace",
      "Italian marble bathrooms",
      "Wine storage room",
      "Building concierge service",
      "Valet parking available"
    ]
  },
  {
    id: "5",
    image: property5,
    name: "Historic Townhouse",
    location: "Heritage District",
    price: "680,000",
    description: "Charming brick townhouse with European flair on a tree-lined boulevard.",
    type: "townhouse",
    fullDescription: "Step into timeless elegance with this beautifully preserved historic townhouse. Located on a picturesque tree-lined street in the Heritage District, this charming residence combines classic architectural details with modern comforts. The distinctive brick facade and arched entrance reflect European-inspired design, while the interior has been thoughtfully updated with contemporary amenities. Original hardwood floors, decorative moldings, and a cozy fireplace add character throughout. The private courtyard garden provides a peaceful retreat in the heart of the city. This is a rare opportunity to own a piece of architectural history.",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "1,800 sq ft",
    images: [property5, interior2, interior1, property5, interior2, interior1],
    features: [
      "Original hardwood flooring",
      "Decorative fireplace",
      "Private courtyard garden",
      "Updated kitchen with modern appliances",
      "Walking distance to shops and cafes",
      "Historic district charm"
    ]
  },
  {
    id: "6",
    image: property6,
    name: "Southwest Ranch Estate",
    location: "Desert Springs",
    price: "495,000",
    description: "Spacious single-story ranch home with expansive yard and mountain backdrop.",
    type: "house",
    fullDescription: "Embrace the Southwest lifestyle in this beautiful ranch-style home. Situated on a generous lot with mountain views, this single-story residence offers comfortable living with southwestern charm. The open floor plan connects the living, dining, and kitchen areas, perfect for entertaining. Large windows frame the stunning desert landscape, while the covered patio extends your living space outdoors. The spacious master suite features a luxurious bathroom and direct access to the backyard. With low-maintenance landscaping and energy-efficient features, this home combines style with practicality in a serene desert setting.",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "2,100 sq ft",
    images: [property6, interior2, interior1, property6, interior2, interior1],
    features: [
      "Mountain views",
      "Low-maintenance desert landscaping",
      "Covered patio for outdoor living",
      "Energy-efficient construction",
      "Open-concept floor plan",
      "Quiet cul-de-sac location"
    ]
  },
  {
    id: "7",
    image: property7,
    name: "Mountain Retreat Cabin",
    location: "Pine Forest Reserve",
    price: "425,000",
    description: "Contemporary cabin nestled among tall pines with large viewing deck.",
    type: "cabin",
    fullDescription: "Escape to your private mountain sanctuary in this stunning contemporary cabin. Nestled among towering pine trees, this retreat offers the perfect blend of rustic charm and modern comfort. The dramatic A-frame design features floor-to-ceiling windows that showcase the surrounding forest, while the expansive deck provides an ideal spot for morning coffee or evening stargazing. Inside, vaulted ceilings with exposed beams create an airy, welcoming atmosphere. The open-concept living area centers around a modern fireplace, perfect for cozy mountain evenings. This is the ultimate getaway for nature lovers and outdoor enthusiasts.",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "1,900 sq ft",
    images: [property7, interior1, interior2, property7, interior1, interior2],
    features: [
      "Surrounded by forest preserve",
      "Large wraparound deck",
      "Modern fireplace",
      "Vaulted ceilings with exposed beams",
      "Minutes from hiking trails",
      "Peaceful mountain setting"
    ]
  },
  {
    id: "8",
    image: property8,
    name: "Colonial Grand Manor",
    location: "Prestige Oaks",
    price: "1,950,000",
    description: "Elegant colonial mansion with columned portico and circular driveway.",
    type: "mansion",
    fullDescription: "Experience grandeur and sophistication in this magnificent colonial estate. This stately home features iconic white columns, symmetrical architecture, and meticulous attention to detail throughout. The grand foyer with curved staircase sets the tone for the elegance found in every room. Formal living and dining rooms provide perfect settings for entertaining, while the family wing offers comfortable everyday living spaces. The gourmet kitchen would delight any chef, and the master suite serves as a private haven. Set on beautifully manicured grounds with mature trees, this property represents the epitome of gracious living.",
    bedrooms: 6,
    bathrooms: 5,
    parking: 4,
    area: "6,200 sq ft",
    images: [property8, interior1, interior2, property8, interior1, interior2],
    features: [
      "Grand columned entrance",
      "Formal living and dining rooms",
      "Gourmet chef's kitchen",
      "Library with built-in bookshelves",
      "Manicured landscaped grounds",
      "Four-car garage"
    ]
  },
  {
    id: "9",
    image: property9,
    name: "Lakefront Modern Estate",
    location: "Crystal Lake",
    price: "1,450,000",
    description: "Contemporary lakefront home with private dock and floor-to-ceiling windows.",
    type: "villa",
    fullDescription: "Discover waterfront luxury in this stunning contemporary lakefront estate. Floor-to-ceiling windows throughout the home frame breathtaking lake views and flood the interior with natural light. The open-concept design seamlessly connects indoor and outdoor living spaces, with multiple decks and a private dock for water activities. The modern kitchen features top-of-the-line appliances and a large island perfect for casual dining. The master suite offers a private balcony overlooking the water, creating a serene retreat. Whether you're boating, swimming, or simply enjoying the sunset, this home celebrates lakeside living at its finest.",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: "3,400 sq ft",
    images: [property9, interior2, interior1, property9, interior2, interior1],
    features: [
      "Private boat dock",
      "Waterfront deck with lake access",
      "Floor-to-ceiling lakefront windows",
      "Modern open-concept design",
      "Master suite with water views",
      "Outdoor entertainment area"
    ]
  },
  {
    id: "10",
    image: property10,
    name: "Urban Studio Residence",
    location: "Arts District",
    price: "385,000",
    description: "Sleek minimalist building in the vibrant arts district with modern amenities.",
    type: "apartment",
    fullDescription: "Embrace contemporary urban living in this sleek studio apartment located in the vibrant Arts District. This modern residence features clean lines, an efficient layout, and high-quality finishes throughout. The open living space maximizes functionality while maintaining a sense of spaciousness. Large windows provide abundant natural light and city views. The building offers excellent amenities including a fitness center and secure entry. Located in the heart of the arts and culture scene, you'll be steps away from galleries, theaters, trendy restaurants, and nightlife. This is ideal for young professionals seeking an urban lifestyle with style and convenience.",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "650 sq ft",
    images: [property10, interior1, interior2, property10, interior1, interior2],
    features: [
      "Modern minimalist design",
      "Building fitness center",
      "Secure building entry",
      "Walking distance to galleries and theaters",
      "Trendy neighborhood location",
      "Efficient studio layout"
    ]
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};
