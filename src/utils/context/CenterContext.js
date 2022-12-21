import { createContext, useContext, useState } from 'react';

const CenterContext = createContext();

const CenterState = props => {
  const host = process.env.REACT_APP_SERVER_URL;
  const [centers, setCenters] = useState([]);
  const [nearbyCenters, setNearbyCenters] = useState([]);

  // Get all Center
  const getCenter = async () => {
    const response = await fetch(`${host}/center/find`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setCenters(data);
  };

  const getNearbyCenter = async code => {
    console.log(code);
    const response = await fetch(
      `http://localhost:6969/center/nearby?pinCode=201312&id=637cdc95d266e9d82bcec623`,
      {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }
    );
    const data = await response.json();
    console.log(data)
    setNearbyCenters(data);
  };

  const addCenter = async centerInfo => {
    console.log(centerInfo);
    const response = await fetch(`${host}/center/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(centerInfo),
    });
    console.log(response);
    // const data = await response.json();
    // setCenters(centers.concat(data));
    return true;
  };

  return (
    <CenterContext.Provider
      value={{ centers, addCenter, getCenter, getNearbyCenter, nearbyCenters }}
    >
      {props.children}
    </CenterContext.Provider>
  );
};
export const useCenter = () => useContext(CenterContext);
export default CenterState;
