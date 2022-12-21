import { createContext, useContext, useState } from 'react';

const AuthUser = createContext();

const AuthState = props => {
  const host = process.env.REACT_APP_SERVER_URL;
  const [user, setUser] = useState({
    _id: '637cdc95d266e9d82bcec623',
    name: 'Tushar',
    role: 'inspector',
    address: {
      line_1: 'Maharaja Agrasen Institute Of Technology',
      line_2: 'Rohini',
      city: 'Delhi',
      state: 'New Delhi',
      pin_code: 110001,
    },
  });
  const [org, setOrg] = useState(null);

  const getUser = async () => {
    const data = window.open(`${host}/auth/google`, '_self');
    setUser(data);
    setOrg(null);
    // console.log("Hello");
  };

  const logOut = async () => {
    const response = await fetch(`${host}/auth/logOut`, {
      method: 'GET',
    });
    if (response.status === 200) {
      setUser(null);
      setOrg(null);
    }
  };
  const OrgLogin = async credentials => {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setOrg(data);
    setUser(null);
  };

  return (
    <AuthUser.Provider value={{ logOut, getUser, user, OrgLogin, org }}>
      {props.children}
    </AuthUser.Provider>
  );
};
export const useAuth = () => useContext(AuthUser);
export default AuthState;
