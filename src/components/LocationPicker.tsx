import React, { useState } from 'react';

const LocationPicker = () => {
  const [location, setLocation] = useState<any>({});
  return (
    <div>
      {!location ? (
        <span className="font-medium _text-default">Select Location</span>
      ) : (
        <div className="flex flex-col">
          <p className="font-semibold text-lg leading-tight">
            Delivery in 10 Minutes
          </p>
          <span className="text-sm _text-default">Jaipur</span>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
