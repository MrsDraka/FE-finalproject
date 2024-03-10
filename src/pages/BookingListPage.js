import React, { useState, useEffect } from "react";
import BookingList from "../components/BookingList";

export default function BookingListPage() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        "https://65e524d33070132b3b259447.mockapi.io/booking",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error while retrieving data");
      }

      const data = await response.json();
      setBookings(data);
      console.log(bookings);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://65e524d33070132b3b259447.mockapi.io/booking/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await fetchBookings();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      await fetch(`https://65e524d33070132b3b259447.mockapi.io/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await fetchBookings();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []); // Empty array as second argument to run only once on mount

  return (
    <div className="pt-12 bg-indigo-950">
      <div className=" w-full m-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-white text-center my-10">
          Current Bookings
        </h1>
        <div className="flex justify-start">
          <img
            className="w-40"
            src="\images\iconastronomybookwhite.svg"
            alt="astronomy book icon"
          ></img>
        </div>
        <BookingList
          bookings={bookings}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <div className="flex justify-end">
          <img
            className="w-40"
            src="\images\iconringplanetwhite.svg"
            alt="ring planet icon"
          ></img>
        </div>
      </div>
    </div>
  );
}
