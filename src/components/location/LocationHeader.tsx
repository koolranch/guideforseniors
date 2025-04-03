"use client";

import * as React from 'react';

interface LocationHeaderProps {
  city: string;
}

export const LocationHeader: React.FC<LocationHeaderProps> = ({ city }: LocationHeaderProps) => {
  const decodedCity = decodeURIComponent(city);
  
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Senior Living Communities in {decodedCity}
        </h1>
        <p className="text-lg text-gray-600">
          Find the perfect senior living community in {decodedCity}. Compare assisted living, memory care, and independent living options.
        </p>
      </div>
    </div>
  );
}; 