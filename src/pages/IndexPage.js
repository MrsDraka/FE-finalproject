import React from "react";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    //Intro to the page
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center">
      <div>
        <div>
          <img
            className="w-40"
            src="\images\iconastronautfootprintw.svg"
            alt="atronaut footprint icon"
          ></img>
        </div>
        <div className="max-w-4xl mx-auto p-8 bg-sky-300 shadow-lg rounded-lg mt-3">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to GalacticRoutes! – Your Gateway to the Cosmos!
          </h1>
          <p className="text-lg mb-8 text-center">
            Step into the neon-lit corridors of our digital nexus, where the
            universe unfolds before your eyes. From the bustling metropolises of
            distant planets to the edge of the cosmic frontier, we offer access
            to the most coveted destinations in the galaxy. Prepare for
            departure. Your journey begins now!
          </p>
          <div className="flex justify-center">
            <Link
              className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
              to="/destinations"
            >
              Explore Our Destinations
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="w-40"
            src="\images\iconastronautgravityw.svg"
            alt="astronaut floating icon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
