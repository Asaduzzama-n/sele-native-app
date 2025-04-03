

export const onboardingData = [
  {
    image: require('../assets/images/suv1.png'),
    text: "Drive Your Way, Anytime!",
    description: "Rent a car quickly with just a few taps, Fast, easy, convenient, and completely hassle-free.",
  },
  {
    image: require('../assets/images/suv2.png'),
    text: "Easy Booking.",
    description: "Easy booking ensures quick, hassle-free reservations anytime, anywhere with convenience.",
  },
  // {
  //   image: require('../assets/images/suv2.png'),
  //   text: "Easy Booking.",
  //   description: "Easy booking ensures quick, hassle-free reservations anytime, anywhere with convenience.",
  // },
  // {
  //   image: "https://imgs.search.brave.com/r97LRTsuhopn2hRISSQWCzcM3WCv_tJoK0-tnfmQRb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzY0LzQ4Lzg0/LzM2MF9GXzEwNjQ0/ODg0MjJfWVgwNEtp/RU1HaGlNazZPc0hP/cGpacEpVZ1ZicDBx/V2wuanBn",
  //   text: "Get the Best Deals",
  //   description: "Compare prices, check offers, and find the perfect car that fits your budget with Sele.",
  // },
];

export const brandData = [
  {
    id:1,
    name:'BMW',
    image:require('../assets/images/bmw.png'),
  },
  {
    id:2,
    name:'Audi',
    image:require('../assets/images/audi.png'),
  },
  {
    id:3,
    name:'Tesla',
    image:require('../assets/images/tesla.png'),
  },
  {
    id:4,
    name:'Honda',
    image:require('../assets/images/honda.png'),
  },
  {
    id:5,
    name:'Mercedes',
    image:require('../assets/images/honda.png'),
  },
  {
    id:6,
    name:'Volvo',
    image:require('../assets/images/honda.png'),
  },{
    id:7,
    name:'All',
    image:require('../assets/images/honda.png'),
  }
]





export const carData = [
  {
    id: 1,
    name: 'BMW X5',
    image: require('../assets/images/car-1.png'),
    mileage: '22 MPG',
    description: 'A luxury SUV with high performance and comfort.',
    pricePerDay: 120,
    gasoline: 'Petrol',
    color: 'Black',
    type: 'SUV',
    seatCount: 5,
    gearSystem: 'Automatic',
    brand: 'BMW',
    protectionPlan: 'Full Coverage',
    agency: {
      name: 'Luxury Rentals',
      location: 'Los Angeles, CA',
      image: require('../assets/images/agency.png'),
    },
    reviews: [
      {
        reviewerImage: require('../assets/images/user.png'),
        rating: 4.8,
        review: 'Amazing car, smooth drive, and great comfort!',
        date: '2025-04-01',
      },
    ],
  },
  {
    id: 2,
    name: 'Audi A6',
    image: require('../assets/images/car-2.png'),
    mileage: '25 MPG',
    description: 'A stylish and fuel-efficient sedan.',
    pricePerDay: 100,
    gasoline: 'Diesel',
    color: 'White',
    type: 'Sedan',
    seatCount: 5,
    gearSystem: 'Automatic',
    brand: 'Audi',
    protectionPlan: 'Basic Coverage',
    agency: {
      name: 'Elite Cars',
      location: 'New York, NY',
      image: require('../assets/images/agency.png'),
    },
    reviews: [
      {
        reviewerImage: require('../assets/images/user.png'),
        rating: 4.5,
        review: 'Comfortable ride and fuel-efficient.',
        date: '2025-03-15',
      },
    ],
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    image: require('../assets/images/car-3.png'),
    mileage: 'Electric',
    description: 'An advanced electric car with autopilot features.',
    pricePerDay: 150,
    gasoline: 'Electric',
    color: 'Red',
    type: 'Sedan',
    seatCount: 5,
    gearSystem: 'Automatic',
    brand: 'Tesla',
    protectionPlan: 'Premium Coverage',
    agency: {
      name: 'Green Drive',
      location: 'San Francisco, CA',
      image: require('../assets/images/agency.png'),
    },
    reviews: [
      {
        reviewerImage: require('../assets/images/user.png'),
        rating: 4.9,
        review: 'Best electric car experience!',
        date: '2025-02-20',
      },
    ],
  },
];