import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import Title from "../Components/Title";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY;

  const fatchMyBookings = async () => {
    setBookings(dummyBookingData);
  };
  useEffect(() => {
    fatchMyBookings();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <Title
        title="My Bookings"
        subTitle="View and manage your all car bookings"
        align="left"
      />
      {bookings.length === 0 && <p>No bookings found</p>}
      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12 "
          >
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt={booking.car.name}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.car.brand} {booking.car.model}
              </p>

              <p className="text-gray-500">
                {booking.car.year} . {booking.car.category} .{" "}
                {booking.car.location}
              </p>
            </div>

            {/* Booking Info */}

            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-light rounded">
                  Booking #{index + 1}
                </p>
                <p
                  className={`px-3 py-1 text-x5 rounded-full ${
                    booking.status === "confirmed"
                      ? "bg-green-400/15 text-green-600"
                      : "bg-red-400/15 text-red-600"
                  }`}
                >
                  {booking.status}
                </p>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <FaRegCalendarAlt className="w-4 h-4 mt-1" />
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p>
                    {booking.pickupDate?.split("T")[0]} <h1>To</h1>
                    {booking.returnDate?.split("T")[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <IoLocationOutline className="w-4 h-4 mt-1" />
                <div>
                  <p className="text-gray-500">Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="md:col-span-1 flex flex-col justify-between gap-6">
              <div className="text-sm text-gray-500 text-right">
                <p>Total Price</p>
                <h1 className="text-2xl font-semibold text-primary">
                  {currency}
                  {booking.total_rent}
                </h1>
                <p>Booked on {booking.createdAt.split("T")[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;

