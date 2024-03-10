import React from "react";

import DestinationList from "../components/DestinationList";

export default function DestinationsPage({ destinations }) {
  return (
    <div className="pt-12 bg-indigo-950">
      <div>
        <h1 className="text-white text-2xl font-bold text-center my-10">
          Our Destinations
        </h1>
        <div className="flex justify-center">
          <img
            className="w-40"
            src="\images\icongravitywhite.svg"
            alt="planet orbits icon"
          ></img>
        </div>
      </div>
      <DestinationList destinations={destinations} />

      <div className="flex justify-center">
        <img
          className="w-40"
          src="\images\iconjupitermarswhite.svg"
          alt="jupiter mars icon"
        ></img>
      </div>
    </div>
  );
}
