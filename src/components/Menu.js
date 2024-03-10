import React from "react";
import { Link } from "react-router-dom";

import MenuLink from "./MenuLink";

export default class MainPage extends React.Component {
  render() {
    return (
      //Renders a simple navbar
      <div className=" backdrop-blur-md bg-amber-300 fixed left-0 right-0 top-0">
        <div className=" max-w-screen-lg w-full m-auto flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <Link to={"/"}>
              <div
                style={{ fontFamily: "Sixtyfour, sans-serif" }}
                className="text-2xl text-[#d946ef]"
              >
                GalacticRoutes
              </div>
            </Link>
            <MenuLink to="/destinations" text="Destinations" />
            <MenuLink to="/booking" text="Book Now" />
            <MenuLink to="/about" text="About Us" />
          </div>
          <div className="flex items-center gap-6">
            <MenuLink to="/booking-list" text="My Reservations" />
          </div>
        </div>
      </div>
    );
  }
}
