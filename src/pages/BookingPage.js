import React from "react";

import BookingForm from "../components/BookingForm";

async function handleBooking(formData) {
  //tries to send the form to the API
  try {
    const response = await fetch(
      "https://65e524d33070132b3b259447.mockapi.io/booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    //Handles errors
    if (!response.ok) {
      throw new Error("Error while submitting the form");
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

//Displays the form
export default function BookingPage({ destinations }) {
  return (
    <div className="pt-20 bg-indigo-950">
      <div>
        <div className=" w-full max-w-screen-lg m-auto">
          <h1 className=" text-2xl font-bold text-white text-center my-10">
            Book Your Trip
          </h1>
          <div className="flex justify-center">
            <img
              className="w-40"
              src="\images\iconclipboardwhite.svg"
              alt="clipboard icon"
            ></img>
          </div>
          {/*Component for the booking form */}
          <div className="my-4">
            <BookingForm
              destinations={destinations}
              handleBooking={handleBooking}
            />
          </div>

          <div className="flex justify-center">
            <img
              className="w-40"
              src="\images\iconshootingstarwhite.svg"
              alt="shooting star icon"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
