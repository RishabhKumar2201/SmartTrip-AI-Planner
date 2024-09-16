import { createContext, useContext, useState } from "react";

export const TripsContext = createContext();

export const CreateTripProvider = ({ children }) => {
  const [tripData, setTripData] = useState([]);

  return (
    <TripsContext.Provider value={{ tripData, setTripData }}>
      {children}
    </TripsContext.Provider>
  );
};

export const useTrip = () => useContext(TripsContext);
