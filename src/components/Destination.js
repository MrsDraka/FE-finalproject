import React from "react";

export default function DestinationPage({ destination }) {
  const { name, description, features, services, image } = destination;
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-sky-300 rounded-lg shadow-md">
      <div>
        <img
          src={`/images/${image}`}
          alt={name}
          className="w-full h-auto rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="text-lg font-semibold mb-2">Characteristics:</h3>
        <ul className="list-disc list-inside mb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Included in the package:</h3>
        <ul className="list-disc list-inside mb-4">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
