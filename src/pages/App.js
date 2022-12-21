import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/homePage';
import theme from '../styles/theme';
import Center from './center';
// eslint-disable-next-line no-unused-vars
import axios, * as others from 'axios';
import { useAuth } from '../utils/context/AuthContext';
import { useCenter } from '../utils/context/CenterContext';
import Organisations from './orgnisations/organisations';
import Dashboard from './dashboard';
import DashboardHome from './dashboard/home';
import Approved from './dashboard/approved';
import Pending from './dashboard/pending';
import Rejected from './dashboard/rejected';
import Profile from './profile';
import OrganizationForm from './register/register';
import SignUp from './signUp/signUp';
import Edit from './dashboard/edit';
import Reviews from './rating/rating';
import { useContract } from '../utils/context/ContractContext';

function App() {
  const { user, org } = useAuth();
  const { getNearbyCenter } = useCenter();
  const {getMyContracts} = useContract();
  useEffect(() => {
    if(!user && !org){
      return;
    }
    if(user){
      getMyContracts(user._id);
    }else if(org){
      getMyContracts(org.id);
    }

  }, [org,user])

  useEffect(() => {
    // const findLocation = () => {
      getNearbyCenter("201312");
      // axios
      //   .get(
      //     'https://ipgeolocation.abstractapi.com/v1/?api_key=2d031ecd0b434f438088ba6ba693706a'
      //   )
      //   .then(async response => {
      //     await getNearbyCenter("201312");
      //     // console.log(response);
      //   })
      //   .catch(error => {
      //     // getNearbyCenter("110086")
      //     console.log(error);
      //   });
    // };
    // if (!user || !org) {
    //   findLocation();
    // } else if (user) {
    //   if (user.address) {
    //     // getNearbyCenter(user.address.pin_code);
    //   } else {
    //     findLocation();
    //   }
    // } else if (org) {
    //   if (org.address) {
    //     // getNearbyCenter(user.address.pin_code);
    //   } else {
    //     findLocation();
    //   }
    // }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/organisations" element={<Organisations />} />
          {/* <Route path="/register" element={<OrganizationForm />} /> */}
          <Route path="/center" element={<Center />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/organisations/:id" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="pending" element={<Pending />} />
            <Route path="approved" element={<Approved />} />
            <Route path="rejected" element={<Rejected />} />
            <Route path="edit" element={<Edit />} />
          </Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
