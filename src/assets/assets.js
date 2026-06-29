import logo from "../assets/CarRental_Logo.png";
import testimonial_image_1 from "../assets/testimonial_image_1.png";
import testimonial_image_2 from "../assets/testimonial_image_2.png";
import main_car from "../assets/main_car.png";
import banner_car_image from "../assets/banner_car_image.png";
import Explore_Defender_110 from "../assets/Explore_Defender_110.jpeg";
import Land_Rover_Defender from "../assets/Land_Rover_Defender.png";
import mahindra_Scorpio_N from "../assets/mahindra_Scorpio_N.png";
import Mahindra_Thar from "../assets/Mahindra_Thar.png";
import tata_sierra from "../assets/tata_sierra.png";
import The_BMW_3_Series from "../assets/The_BMW_3_Series.png";
import car_image1 from "../assets/car_image1.png";
import car_image2 from "../assets/car_image2.png";
import car_image3 from "../assets/car_image3.png";
import car_image4 from "../assets/car_image4.png";
import user_profile from "../assets/user_profile.png";
import dashboardIcon from "../assets/dashboardIcon.svg";
import dashboardIconColor from "../assets/dashboardIconColor.svg";
import addIcon from "../assets/addIcon.svg";
import addiconColor from "../assets/addiconColor.svg";
import carIcon from "../assets/caricon.svg";
import carIconColor from "../assets/carIconColor.svg";
import listicon from "../assets/listicon.svg";
import listiconColored from "../assets/listiconColored.svg";
import cautioniconColor from "../assets/cautioniconColor.svg";
import upload_Icon from "../assets/upload_icon.svg";
import eye_Icon from "../assets/eye_icon.svg";
import eye_close_Icon from "../assets/eye_close_icon.svg";
import Land_Rover_Defender1 from "../assets/Land_Rover_Defender1.jpeg";
import Range_Rover from "../assets/Range_Rover.jpg";
import Range from "../assets/Range.jpeg";
import SUV_TATA_HARRIER from "../assets/SUV'S_TATA_HARRIER.jpeg";
import Suzuki from "../assets/Suzuki_Maruti-Ertiga.jpeg";
import Tata_Punch1 from "../assets/Tata_Punch1.jpeg";
import Tata_Harrier_dark from "../assets/Tata_Harrier_dark.jpeg";
import Tata_harrier from "../assets/Tata_harrier.jpeg";
import Login_Page from "../assets/Login_page.jpg";
import Login_Video from "../assets/Login_Video.mp4";
export const cityList = [
  "Dilhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];

export const assets = {
  logo,
  testimonial_image_1,
  testimonial_image_2,
  main_car,
  banner_car_image,
  Explore_Defender_110,
  Land_Rover_Defender,
  mahindra_Scorpio_N,
  Mahindra_Thar,
  tata_sierra,
  The_BMW_3_Series,
  car_image1,
  car_image2,
  car_image3,
  car_image4,
  user_profile,
  dashboardIcon,
  dashboardIconColor,
  addIcon,
  addiconColor,
  carIcon,
  carIconColor,
  listicon,
  listiconColored,
  cautioniconColor,
  upload_Icon,
  eye_Icon,
  eye_close_Icon,
  Land_Rover_Defender1,
  Range_Rover,
  Range,
  SUV_TATA_HARRIER,
  Suzuki,
  Tata_Harrier_dark,
  Tata_harrier,
  Tata_Punch1,
  Login_Page,
  Login_Video,
};

export const car = {};

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColor,
  },
  {
    name: "Add Car",
    path: "/owner/add-car",
    icon: addIcon,
    coloredIcon: addiconColor,
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
    icon: carIcon,
    coloredIcon: carIconColor,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: listicon,
    coloredIcon: listiconColored,
  },
];

export const dummyUserData = {
  _id: "64a7f4e2f1c2b9e5d6a8c2235",
  name: "Rajesh",
  email: "rajesh@gmail.com",
  role: "owner",
  image: user_profile,
};

export const dummyCarData = [
  {
    _id: "105",
    owner: "105",
    brand: "Tata Punch",
    model: " Plus",
    image: Tata_Punch1,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "104",
    owner: "104",
    brand: "Tata Harrier Dark",
    model: " Pure X",
    image: Tata_Harrier_dark,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "103",
    owner: "103",
    brand: "Tata Harrier",
    model: " SUV",
    image: Tata_harrier,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "102",
    owner: "102",
    brand: "Maruti Suzuki",
    model: " Ertiga",
    image: Suzuki,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "101",
    owner: "101",
    brand: "TATA HARRIER",
    model: " Fearless X Plus",
    image: SUV_TATA_HARRIER,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c223e5d6a8c22w3",
    owner: "64a7f4e22c2b9e5d6a8c2w23",
    brand: "Range Rover",
    model: " Autobiography",
    image: Range,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b925d6a8c22w3",
    owner: "64a7f4e2f1c2139e5d6a8c2w23",
    brand: "Range Rover",
    model: " SV",
    image: Range_Rover,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c22w3",
    owner: "64a7f4e2f1c2b9e5d6a8c2w23",
    brand: "Land Rover Defender",
    model: " X",
    image: Land_Rover_Defender1,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c2233",
    owner: "64a7f4e2f1c2b9e5d6a8c12w23",
    brand: "BMW ",
    model: " X5",
    image: car_image1,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 10000,
    location: "pune",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c223",
    owner: "64a7f4e2f1c2b9e5d6a8c113",
    brand: "Toyota ",
    model: "Corolla",
    image: car_image2,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 5000,
    location: "Chennai",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c7123",
    owner: "64a7f4e2f1c2b9e5d6a8c103",
    brand: "Jeep ",
    model: "Wrangler",
    image: car_image3,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 6000,
    location: "Mumbai",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6aqc723",
    owner: "64a7f4e2f1c2b9e5d6a2c123",
    brand: "Foed",
    model: "Neo 6",
    image: car_image4,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 8000,
    location: "Chennai",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: true,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c127",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "Tata Sierra",
    model: "X5",
    image: tata_sierra,
    year: 2025,
    category: "SUV",
    seating_capacity: 5,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 4000,
    location: "Bangalore",
    description:
      "The Tata Sierra is a classic SUV that combines ruggedness with comfort. Known for its spacious interior and robust performance, the Sierra is perfect for both city driving and off-road adventures.",
    isAvailable: true,
    createdAt: "2025-12-06T11:15:45.456Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d3a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "BMW 3 Series",
    model: "M340i",
    image: The_BMW_3_Series,
    year: 2024,
    category: "Sedan",
    seating_capacity: 5,
    fuel_Type: "Petrol",
    transmission: "Automatic",
    rent_per_day: 6000,
    location: "Delhi",
    description:
      "The BMW 3 Series is a compact luxury sports sedan known for its blend of performance, comfort, and advanced technology. Long considered the benchmark of its class, the 3 Series is praised for its precise handling, powerful yet efficient engines, and premium interior quality.",
    isAvailable: true,
    createdAt: "2025-12-06T12:30:55.789Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c723",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: " Defender",
    model: " SUVs",
    image: Land_Rover_Defender,
    year: 2025,
    category: "SUV",
    seating_capacity: 5,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 8000,
    location: "Chennai",
    description:
      "The Land Rover Defender is an iconic off-road SUV that combines rugged capability with modern luxury. Renowned for its exceptional off-road performance, the Defender features advanced terrain response systems, a durable chassis, and a spacious, high-end interior, making it perfect for both adventurous expeditions and comfortable city driving.",
    isAvailable: false,
    createdAt: "2025-12-06T13:45:05.012Z",
  },
  {
    _id: "64a2f4e2f1c2b9e5d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "Defender",
    model: "Defender 110",
    image: Explore_Defender_110,
    year: 2024,
    category: "SUV",
    seating_capacity: 5,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 9000,
    location: "Pune",
    description:
      "The Explore Defender 110 is a premium variant of the Land Rover Defender, designed for those who seek both adventure and luxury. With its extended wheelbase, it offers additional seating capacity and enhanced interior space. Equipped with cutting-edge off-road technology and a refined interior, the Explore Defender 110 is perfect for long journeys and rugged terrains while ensuring maximum comfort.",
    isAvailable: true,
    createdAt: "2025-12-06T14:55:15.345Z",
  },
  {
    _id: "64a7f4e2f1c2b9e2d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "Mahindra Scorpio",
    model: "MScorpio N",
    image: mahindra_Scorpio_N,
    year: 2025,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Petrol",
    transmission: "Manual",
    rent_per_day: 4500,
    location: "Ahmedabad",
    description:
      "The Mahindra Scorpio N is a modern SUV that combines bold design with powerful performance. Known for its spacious interior, advanced features, and robust build, the Scorpio N is ideal for families and adventure enthusiasts alike. It offers a comfortable ride both on city roads and off-road terrains.",
    isAvailable: false,
    createdAt: "2025-12-06T15:05:25.678Z",
  },
  {
    _id: "64a7f4e2f1c2b9e5d6a8c223",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "Defender",
    model: "Defender 110",
    image: Explore_Defender_110,
    year: 2024,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Diesel",
    transmission: "Automatic",
    rent_per_day: 9000,
    location: "Surat",
    description:
      "The Explore Defender 110 is a premium variant of the Land Rover Defender, designed for those who seek both adventure and luxury. With its extended wheelbase, it offers additional seating capacity and enhanced interior space. Equipped with cutting-edge off-road technology and a refined interior, the Explore Defender 110 is perfect for long journeys and rugged terrains while ensuring maximum comfort.",
    isAvailable: true,
    createdAt: "2025-12-06T16:15:35.901Z",
  },
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    brand: "Mahindra Thar",
    model: "LXT RWD",
    image: Mahindra_Thar,
    year: 2024,
    category: "SUV",
    seating_capacity: 4,
    fuel_Type: "Petrol",
    transmission: "Manual",
    rent_per_day: 3500,
    location: "Mumbai",
    description:
      "The Mahindra Thar is a rugged and stylish SUV designed for both urban adventures and off-road escapades. With its iconic design, powerful engine options, and advanced features, the Thar offers a thrilling driving experience.",
    isAvailable: true,
    createdAt: "2025-12-06T10:20:35.123Z",
  },
];

export const dummyBookingData = [
  {
    _id: "64a9c3d4e5f6a7b8c9d0e123",
    car: dummyCarData[0],
    user: "64a7f4e2f1c2b9e5d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    start_date: "2025-12-10",
    end_date: "2025-12-15",
    status: "confirmed",
    total_rent: 17500,
    createdAt: "2025-12-07T10:25:45.678Z",
  },
  {
    _id: "64a9c3d4e5f6a7b8c9d0e124",
    car: dummyCarData[1],
    user: "64a7f4e2f1c2b9e5d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    start_date: "2025-12-20",
    end_date: "2025-12-22",
    status: "pending",
    total_rent: 10000,
    createdAt: "2025-12-07T11:30:55.789Z",
  },
  {
    _id: "64a9c3d4e5f6a7b8c9d0e125",
    car: dummyCarData[2],
    user: "64a7f4e2f1c2b9e5d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    start_date: "2025-12-25",
    end_date: "2025-12-30",
    status: "cancelled",
    total_rent: 15000,
    createdAt: "2025-12-07T12:35:05.890Z",
  },
  {
    _id: "64a9c3d4e5f6a7b8c9d0e126",
    car: dummyCarData[3],
    user: "64a7f4e2f1c2b9e5d6a8c123",
    owner: "64a7f4e2f1c2b9e5d6a8c123",
    start_date: "2026-01-05",
    end_date: "2026-01-10",
    status: "confirmed",
    total_rent: 25000,
    createdAt: "2025-12-07T13:40:15.901Z",
  },
];
export const dummyDashboardData = {
  totalCars: 4,
  totalBookings: 2,
  pendingBookings: 1,
  completedBookings: 2,
  recentBookings: [dummyBookingData[0], dummyBookingData[1]],
  monthlyRevenue: 840,
};
