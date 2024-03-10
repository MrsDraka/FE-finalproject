import React, { useState } from "react";
import { Navigate } from "react-router-dom";

//Main component for booking
function BookingForm({ handleBooking, destinations }) {
  const [history, setHistory] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tripType: "one-way",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    message: "",
  });

  //handles input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //sends booking data
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleBooking(formData);
    console.log("Submitted reservation info: ", formData);
    // Erases fields after submitting form
    setFormData({
      name: "",
      email: "",
      tripType: "one-way",
      destination: "",
      departureDate: "",
      returnDate: "",
      passengers: 1,
      message: "",
    });

    setHistory(true);
  };

  //Displays the form on the page
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-sky-300 rounded-lg shadow-md"
    >
      {history && <Navigate to="/booking-list" replace={true} />}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="destination"
          className="block text-gray-700 font-semibold mb-2"
        >
          Destination:
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          required
        >
          <option value="">Select your destination here</option>
          {destinations.map((destination, index) => (
            <option value={destination.name}>{destination.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <div>
          <label htmlFor="one-way" className="mr-4">
            <input
              type="radio"
              id="one-way"
              name="tripType"
              value="one-way"
              checked={formData.tripType === "one-way"}
              onChange={handleChange}
              className="mr-2"
            />
            One-way
          </label>
          <label htmlFor="round-trip">
            <input
              type="radio"
              id="round-trip"
              name="tripType"
              value="round-trip"
              checked={formData.tripType === "round-trip"}
              onChange={handleChange}
              className="mr-2"
            />
            Roundtrip
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="departureDate"
          className="block text-gray-700 font-semibold mb-2"
        >
          Departure Date:
        </label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      {formData.tripType === "round-trip" && (
        <div className="mb-4">
          <label
            htmlFor="returnDate"
            className="block text-gray-700 font-semibold mb-2"
          >
            Return Date:
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      )}
      <div className="mb-4">
        <label
          htmlFor="passengers"
          className="block text-gray-700 font-semibold mb-2"
        >
          Astronauts:
        </label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          min="1"
          max="10"
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Additional Information (optional):
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
