import React from "react";
import Destination from "./Destination";

export default function MenuLink({ destinations }) {
  console.log(destinations);
  return (
    <div>
      {destinations.map((destination, index) => (
        <Destination key={index} destination={destination} />
      ))}
    </div>
  );
}
