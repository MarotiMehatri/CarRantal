import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCarData } from "../assets/assets";
import Loader from "../Components/Loader";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { nanoid } from "nanoid";
const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const [pickupData, setPickupData] = useState("");
  const [returnData, setReturnData] = useState("");

  const handleBooking = () => {
    if (!pickupData || !returnData) {
      alert("Please select pickup and return data");
      return;
    }

    const bookingData = {
      bookingId: nanoid(),
      carName: car.name,
      pricePerDay: car.pricePerDay,
      pickupData,
      returnData,
    };

    // Get existing booking
    const oldBookings = JSON.parse(localStorage.getItem("boolings")) || [];

    //save new booking
    localStorage.setItem(
      "boolings",
      JSON.stringify([...oldBookings, bookingData]),
    );
    alert("Booking Successfull");
    navigate("/my-bookings");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);
  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <FaArrowAltCircleRight className="rotate-180 opacity-65" />
        Back to all cars
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: car Image & Details */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} . {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaUserCircle />,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: <BsFuelPump />, text: car.fuel_type },
                { icon: <FaCar />, text: car.transmission },
                { icon: <IoLocationOutline />, text: car.location },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                >
                  <div className="text-2xl text-primary mb-2">{icon}</div>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "360 Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View Mirror",
                ].map((item) => (
                  <li key={item} className="flex item-center text-gray-500">
                    <FaCheck className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right : Booking form */}
        <form
          onSubmit={handleSubmit}
          className="shodow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500"
        >
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            {currency} {car.rent_per_day}{" "}
            <span className="text-base text-gray-400 font-normal">per day</span>
          </p>{" "}
          <hr className="border-borderColor my-6" />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg "
              required
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setPickupData(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg "
              required
              id="riturn-date"
              onChange={(e) => setReturnData(e.target.value)}
            />
          </div>
          <button
            onClick={handleBooking}
            className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer"
          >
            Book Now
          </button>
          <p className="text-center text-sm">
            No credit card required to reserve
          </p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
