import React, { useState } from "react";

//Booking component
export default function Booking({ booking, handleDelete, handleEdit }) {
  const { id } = booking;

  //Determines if it's being edited, and the fields that can be modified
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(booking.name);
  const [editedEmail, setEditedEmail] = useState(booking.email);

  const handleSave = () => {
    setIsEditing(false);
    booking.name = editedName;
    booking.email = editedEmail;
    handleEdit(id, booking);
  };

  return (
    <div className="bg-sky-300 rounded-lg p-4 shadow-md my-4">
      <h2 className="text-lg font-bold mb-2">Booking Details</h2>
      <div>
        <p className="mb-1">
          <strong>Name:</strong> {booking.name}
        </p>
        <p className="mb-1">
          <strong>Email:</strong> {booking.email}
        </p>
        <p className="mb-1">
          <strong>Destination:</strong> {booking.destination}
        </p>
        {booking.departureDate && (
          <p className="mb-1">
            <strong>Departure Date:</strong>{" "}
            <span className="text-sm">
              {new Date(booking.departureDate).toLocaleDateString()}
            </span>
          </p>
        )}
        {booking.returnDate && (
          <p className="mb-1">
            <strong>Return Date:</strong>{" "}
            <span className="text-sm">
              {new Date(booking.returnDate).toLocaleDateString()}
            </span>
          </p>
        )}
        <p className="mb-1">
          <strong>Number of Passengers:</strong> {booking.passengers}
        </p>
        {booking.tripType && (
          <p className="mb-1">
            <strong>Trip Type:</strong> {booking.tripType}
          </p>
        )}
        {booking.message && (
          <p className="mb-1">
            <strong>Message:</strong> {booking.message}
          </p>
        )}
      </div>
      {/*Editing form below */}
      <div className="flex justify-between mt-4">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="rounded p-2 mr-2"
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className="rounded p-2 mr-2"
            />
            <button
              className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="rounded bg-red-500 hover:bg-red-600 text-white px-4 py-2"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
