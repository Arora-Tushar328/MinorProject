import { createContext, useContext, useState } from 'react';

const OrgContext = createContext();

const OrgState = props => {
  const host = process.env.REACT_APP_SERVER_URL;
  const [allOrgs, setAllOrgs] = useState([]);
  const [currentOrg, setCurrentOrg] = useState(null);

  // Get all organisation
  const getAllOrgs = async ({phRange}) => {
    const response = await fetch(`http://localhost:6969/organization/findAll?phRange=${phRange}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    // console.log(data);
    setAllOrgs(data.organizations);
  };

  const registerOrg = async orgInfo => {
    console.log(orgInfo);
    const response = await fetch(`http://localhost:6969/organization/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orgInfo),
    });
    const data = await response.json();
    setAllOrgs(allOrgs.concat(data));
    return response;
  };

  return (
    <OrgContext.Provider
      value={{ allOrgs, setAllOrgs, registerOrg, getAllOrgs, currentOrg, setCurrentOrg }}
    >
      {props.children}
    </OrgContext.Provider>
  );
};
export const useOrg = () => useContext(OrgContext);
export default OrgState;
