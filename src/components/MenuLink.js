import React from "react";
import { Link } from "react-router-dom";

export default function MenuLink({ text, to }) {
  return (
    <Link
      to={to}
      className="text-gray-800 hover:text-blue-500 px-4 py-2 rounded-md flex items-center h-10 hover:bg-sky-300"
    >
      {text}
    </Link>
  );
}
