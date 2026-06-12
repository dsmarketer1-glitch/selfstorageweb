// Shared facility data used by Locations + LocationDetail pages.

export const locations = [
  {
    id: 'houston-westheimer',
    name: 'SecureSpace Houston',
    region: 'Houston',
    address: '1234 Westheimer Rd, Houston, TX 77006',
    phone: '(800) 123-4567',
    price: 49,
    rating: 4.9,
    reviews: 342,
    features: ['Climate Controlled', 'Drive Up Access', '24/7 Access', 'Mobile Gate'],
    landmarks: ['Near River Oaks District', '2 mi from Downtown', 'Off US-59'],
    accessHours: '6:00 AM – 10:00 PM (Daily)',
    officeHours: '9:00 AM – 6:00 PM (Mon–Sat) · 10:00 AM – 4:00 PM (Sun)',
    units: [
      { size: '5 x 5', label: 'Small', type: 'Climate Controlled', price: 49, promo: '1st Month Free', sqft: 25 },
      { size: '5 x 10', label: 'Medium', type: 'Climate Controlled', price: 89, promo: 'Up to 40% Off', sqft: 50 },
      { size: '10 x 10', label: 'Large', type: 'Drive Up Access', price: 139, promo: '1st Month Free', sqft: 100 },
      { size: '10 x 15', label: 'Large', type: 'Climate Controlled', price: 179, promo: null, sqft: 150 },
      { size: '10 x 20', label: 'X-Large', type: 'Drive Up Access', price: 219, promo: null, sqft: 200 },
    ],
  },
  {
    id: 'dallas-greenville',
    name: 'SecureSpace Dallas North',
    region: 'Dallas',
    address: '5678 Greenville Ave, Dallas, TX 75206',
    phone: '(800) 234-5678',
    price: 55,
    rating: 4.8,
    reviews: 287,
    features: ['Climate Controlled', 'RV Parking', '24/7 Access', 'Drive Up Access'],
    landmarks: ['Near SMU Campus', '5 min from US-75', 'Lower Greenville'],
    accessHours: '24 Hours (App Access)',
    officeHours: '9:00 AM – 6:00 PM (Mon–Sat) · Closed Sun',
    units: [
      { size: '5 x 5', label: 'Small', type: 'Climate Controlled', price: 55, promo: '1st Month Free', sqft: 25 },
      { size: '5 x 10', label: 'Medium', type: 'Climate Controlled', price: 95, promo: 'Up to 30% Off', sqft: 50 },
      { size: '10 x 10', label: 'Large', type: 'Drive Up Access', price: 145, promo: null, sqft: 100 },
      { size: '10 x 25', label: 'X-Large', type: 'Drive Up Access', price: 249, promo: '1st Month Free', sqft: 250 },
    ],
  },
  {
    id: 'austin-burnet',
    name: 'SecureSpace Austin',
    region: 'Austin',
    address: '9101 Burnet Rd, Austin, TX 78758',
    phone: '(800) 345-6789',
    price: 60,
    rating: 4.9,
    reviews: 401,
    features: ['Climate Controlled', '24/7 Access', 'Wine Storage', 'Mobile Gate'],
    landmarks: ['North Burnet', 'Near The Domain', '10 min from Downtown'],
    accessHours: '5:00 AM – 11:00 PM (Daily)',
    officeHours: '9:00 AM – 6:00 PM (Mon–Sat) · 10:00 AM – 4:00 PM (Sun)',
    units: [
      { size: '5 x 5', label: 'Small', type: 'Climate Controlled', price: 60, promo: '1st Month Free', sqft: 25 },
      { size: '5 x 10', label: 'Medium', type: 'Climate Controlled', price: 99, promo: null, sqft: 50 },
      { size: '10 x 10', label: 'Large', type: 'Climate Controlled', price: 159, promo: 'Up to 40% Off', sqft: 100 },
      { size: '10 x 20', label: 'X-Large', type: 'Drive Up Access', price: 229, promo: null, sqft: 200 },
    ],
  },
  {
    id: 'fortworth-alliance',
    name: 'SecureSpace Fort Worth',
    region: 'Fort Worth',
    address: '4422 Heritage Trace Pkwy, Fort Worth, TX 76244',
    phone: '(800) 456-7890',
    price: 45,
    rating: 4.7,
    reviews: 198,
    features: ['Drive Up Access', 'RV Parking', 'Vehicle Storage', '24/7 Access'],
    landmarks: ['Alliance Town Center', 'Near I-35W', 'Keller / Northlake'],
    accessHours: '6:00 AM – 10:00 PM (Daily)',
    officeHours: '9:00 AM – 6:00 PM (Mon–Sat) · Closed Sun',
    units: [
      { size: '5 x 10', label: 'Medium', type: 'Drive Up Access', price: 45, promo: '1st Month Free', sqft: 50 },
      { size: '10 x 10', label: 'Large', type: 'Climate Controlled', price: 129, promo: null, sqft: 100 },
      { size: '10 x 30', label: 'Vehicle', type: 'Vehicle Storage', price: 199, promo: 'Up to 25% Off', sqft: 300 },
    ],
  },
];

export const regions = ['Dallas', 'Houston', 'Austin', 'Fort Worth'];

export function getLocation(id) {
  return locations.find((l) => l.id === id) || locations[0];
}
