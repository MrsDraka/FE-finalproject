import React from "react";
import Booking from "./Booking";

export default function BookingList({ bookings, handleDelete, handleEdit }) {
  //Displays the list of all bookings
  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="w-full max-w-screen-md mx-auto flex flex-col gap-4">
        {bookings.map((booking, index) => (
          <Booking
            key={index}
            booking={booking}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
