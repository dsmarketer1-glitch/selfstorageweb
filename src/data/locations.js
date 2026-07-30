// Facility data for Self Storage 214 — Crowley, TX.

export const locations = [
  {
    id: 'crowley-bean-dr',
    name: 'Self Storage 214 — Crowley',
    region: 'Crowley',
    address: '1520 Bean Dr, Crowley, TX 76036',
    phone: '(682) 200-3353',
    price: 45,
    rating: 4.9,
    reviews: 128,
    features: ['24-Hour Access', 'Fully Gated', 'Boat & RV Storage', 'Drive-Up Access'],
    landmarks: ['Off Chisholm Trail Pkwy', 'Minutes from Downtown Crowley', 'Serving Crowley, Burleson & S. Fort Worth'],
    accessHours: '24-Hour Access (Gated Entry)',
    officeHours: '9:00 AM – 5:00 PM (Mon–Sun)',
    units: [
      { size: '5 x 5', label: 'Small', type: 'Drive-Up Access', price: 45, promo: '1st Month Free', sqft: 25 },
      { size: '5 x 10', label: 'Medium', type: 'Drive-Up Access', price: 65, promo: null, sqft: 50 },
      { size: '10 x 10', label: 'Large', type: 'Drive-Up Access', price: 115, promo: 'Up to 20% Off', sqft: 100 },
      { size: '10 x 20', label: 'X-Large', type: 'Boat & RV Storage', price: 185, promo: '1st Month Free', sqft: 200 },
      { size: '20 x 20', label: 'Vehicle', type: 'Commercial / Vehicle', price: 285, promo: null, sqft: 400 },
    ],
  },
];

export const regions = ['Crowley'];

export function getLocation(id) {
  return locations.find((l) => l.id === id) || locations[0];
}
