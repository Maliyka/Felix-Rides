export type Vehicle = {
  id: string;
  name: string;
  classType: string;
  image: string;
  passengers: number;
  luggage: number;
  features: string[];
};

export const fleetData: Vehicle[] = [
  {
    id: "saloon-car",
    name: "Saloon Car",
    classType: "Standard",
    image: "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?auto=format&fit=crop&w=1600&q=80",
    passengers: 4,
    luggage: 2,
    features: ["Affordable Daily Travel", "Comfort Seating", "Ideal for City Transfers", "Professional Chauffeur"]
  },
  {
    id: "executive-car",
    name: "Executive Car",
    classType: "Executive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    passengers: 3,
    luggage: 2,
    features: ["Premium Finish", "Extra Comfort", "Business Travel Ready", "Luxury Interior"]
  },
  {
    id: "estate-car",
    name: "Estate Car",
    classType: "Estate",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1600&q=80",
    passengers: 4,
    luggage: 3,
    features: ["Extra Boot Capacity", "Comfort for Families", "Smooth Long Rides", "Stylish Exterior"]
  },
  {
    id: "mpv",
    name: "MPV",
    classType: "Group Travel",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80",
    passengers: 6,
    luggage: 4,
    features: ["Perfect for Small Groups", "Flexible Seating", "Generous Luggage Space", "Airport Transfer Friendly"]
  },
  {
    id: "transporter",
    name: "Transporter",
    classType: "Large Group",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1600&q=80",
    passengers: 8,
    luggage: 6,
    features: ["7-8 Passenger Seating", "Best for Group Trips", "Bulky Luggage Support", "Spacious Cabin"]
  }
];
