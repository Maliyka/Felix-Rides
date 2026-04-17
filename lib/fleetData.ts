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
    id: "bmw-5-series",
    name: "BMW 5 Series",
    classType: "Business Class",
    image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80",
    passengers: 3,
    luggage: 2,
    features: ["WiFi", "Bottled Water", "Leather Seats", "Phone Charger"]
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    classType: "Business Class",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
    passengers: 3,
    luggage: 2,
    features: ["WiFi", "Climate Control", "Leather Seats", "USB-C Charging"]
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    classType: "First Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    passengers: 3,
    luggage: 2,
    features: ["Executive Rear Seats", "Premium Sound", "Leather Interior", "Onboard WiFi"]
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    classType: "First Class",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    passengers: 3,
    luggage: 2,
    features: ["Panoramic Roof", "Leather Seats", "Ambient Lighting", "WiFi"]
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    classType: "Executive MPV",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    passengers: 7,
    luggage: 6,
    features: ["Conference Seating", "Extra Luggage", "WiFi", "Child Seats Available"]
  },
  {
    id: "range-rover",
    name: "Range Rover",
    classType: "Premium SUV",
    image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1200&q=80",
    passengers: 4,
    luggage: 4,
    features: ["All-Wheel Drive", "Leather Interior", "Panoramic Roof", "Onboard WiFi"]
  }
];
