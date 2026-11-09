// Put this at src/lib/places.ts
// Each place gets a Google Maps link built from its name + area, so it opens the right pin on a phone.
// In index.astro, a row's 4th item must match `name` below exactly to get a "📍 Map" link.

export type Place = { name: string; area: string; days: string[] };

export const mapUrl = (p: Place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name}, ${p.area}`)}`;

export const places: Place[] = [
  // Airports
  { name: "Phuket International Airport", area: "Phuket", days: ["Mon 9", "Fri 13"] },
  { name: "Chiang Rai International Airport", area: "Chiang Rai", days: ["Fri 13", "Sat 14"] },
  { name: "Suvarnabhumi Airport", area: "Bangkok", days: ["Sat 14", "Mon 16"] },

  // Phuket: hotel and south
  { name: "Phuket Emerald Beach Resort", area: "Karon, Phuket", days: ["Mon 9", "Tue 10", "Wed 11", "Thu 12"] },
  { name: "Karon Beach", area: "Phuket", days: ["Tue 10"] },
  { name: "Big Buddha Phuket", area: "Chalong, Phuket", days: ["Mon 9"] },
  { name: "Promthep Cape", area: "Rawai, Phuket", days: ["Mon 9"] },
  { name: "Rawai Seafood Market", area: "Rawai, Phuket", days: ["Mon 9"] },
  { name: "Wat Chalong", area: "Chalong, Phuket", days: ["Mon 9"] },
  { name: "Karon Viewpoint", area: "Karon, Phuket", days: ["Tue 10"] },
  { name: "Kata Noi Beach", area: "Phuket", days: ["Tue 10"] },
  { name: "Nai Harn Beach", area: "Phuket", days: ["Tue 10"] },
  { name: "Kata Night Plaza", area: "Kata, Phuket", days: ["Mon 9"] },
  { name: "Karon Temple Market", area: "Wat Karon, Phuket", days: ["Tue 10"] },

  // Phuket: Patong and the west coast (Tue 10)
  { name: "Patong Beach", area: "Phuket", days: ["Tue 10"] },
  { name: "Kan's Haus Cafe and Bistro", area: "Thaweewong Road, Patong, Phuket", days: ["Tue 10"] },
  { name: "Jungceylon Shopping Center", area: "Patong, Phuket", days: ["Tue 10"] },
  { name: "Malin Plaza Patong", area: "Patong, Phuket", days: ["Tue 10"] },
  { name: "Banzaan Fresh Market", area: "Nanai Road, Patong, Phuket", days: ["Tue 10"] },
  { name: "Cafe del Mar Phuket", area: "Kamala Beach, Phuket", days: ["Tue 10"] },
  { name: "Sunshine Massage 2 Karon beach", area: "Karon, Phuket", days: ["Tue 10"] },
  { name: "Nomad Beach Club Phuket", area: "Bang Tao, Phuket", days: ["Tue 10"] },
  { name: "Phuket Boat Lagoon", area: "Phuket", days: ["Tue 10"] }, // usual pier for Phang Nga Bay plankton tours
  { name: "Mantra Forest Spa", area: "Takua Thung, Phang Nga", days: ["Tue 10"] },

  // Phuket: birthday dinner options (Wed 11)
  { name: "Dinner in the Sky Phuket", area: "Karon, Phuket", days: ["Wed 11"] },
  { name: "On The Rock Restaurant", area: "Karon Rd, Karon, Phuket", days: ["Wed 11"] },
  { name: "Moon Terrace Lounge", area: "Kata Beach, Phuket", days: ["Wed 11"] },
  { name: "Sunlique Rooftop Restaurant", area: "Kata Beach, Phuket", days: ["Wed 11"] },
  { name: "Suvana Phuket", area: "Aquaria, Central Phuket Floresta", days: ["Wed 11"] },

  // Phuket Old Town and north (Thu 12)
  { name: "Phuket Elephant Sanctuary", area: "Pa Khlok, Phuket", days: ["Thu 12"] },
  { name: "The Blanket Hotel Phuket", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Thalang Road", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Soi Romanee", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Chinpracha House", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Thai Hua Museum", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Ban Boran Textiles", area: "Phuket Old Town", days: ["Thu 12"] },
  { name: "Chillva Market", area: "Yaowarat Road, Phuket Town", days: ["Thu 12"] },

  // Chiang Rai
  { name: "Diamond Park Inn Chiangrai & Resort", area: "Chiang Rai", days: ["Fri 13", "Sat 14"] },
  { name: "White Temple (Wat Rong Khun)", area: "Chiang Rai", days: ["Fri 13"] },
  { name: "Blue Temple (Wat Rong Suea Ten)", area: "Chiang Rai", days: ["Fri 13"] },
  { name: "Chiang Rai Night Bazaar", area: "Chiang Rai", days: ["Fri 13"] },
  { name: "Chiang Rai Clock Tower", area: "Chiang Rai", days: ["Fri 13"] },
  { name: "Black House (Baan Dam Museum)", area: "Chiang Rai", days: ["Sat 14"] },

  // Bangkok
  { name: "Norn Riverside Bangkok Hotel", area: "Bangkok", days: ["Sat 14", "Sun 15", "Mon 16"] },
  { name: "Asiatique The Riverfront", area: "Bangkok", days: ["Sat 14", "Sun 15"] },
  { name: "Grand Palace", area: "Bangkok", days: ["Sun 15"] },
  { name: "Wat Pho", area: "Bangkok", days: ["Sun 15"] },
  { name: "Tha Tien Pier", area: "Bangkok", days: ["Sun 15"] },
  { name: "Wat Arun", area: "Bangkok", days: ["Sun 15"] },
  { name: "Chatuchak Weekend Market", area: "Bangkok", days: ["Sun 15"] },
  { name: "Analog Space & Vintage Shop", area: "Song Wat Road, Bangkok", days: ["Sun 15"] },
  { name: "MBK Center", area: "Bangkok", days: ["Mon 16"] },
  { name: "Jim Thompson House", area: "Bangkok", days: ["Mon 16"] },
  { name: "Wat Saket (Golden Mount)", area: "Bangkok", days: ["Mon 16"] },
];