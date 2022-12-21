import { createContext, useContext, useState } from 'react';
import Approved from '../../pages/dashboard/approved';

const ContractContext = createContext();

const ContractState = props => {
  const host = process.env.REACT_APP_SERVER_URL;
  const [contracts, setContracts] = useState();

  const getMyContracts = async id => {
    const response = await fetch(
      `http://localhost:6969/request/compile/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setContracts(data);
  };

  const createContract = async contractInfo => {
    console.log(contractInfo);
    const response = await fetch(`http://localhost:6969/request/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contractInfo),
    });
    const data = await response.json();
    console.log(data);
    // return response;
    return true;
  };
  return (
    <ContractContext.Provider
      value={{ createContract, getMyContracts, contracts }}
    >
      {props.children}
    </ContractContext.Provider>
  );
};
export const useContract = () => useContext(ContractContext);
export default ContractState;
