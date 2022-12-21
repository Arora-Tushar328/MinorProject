import { Flex, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../utils/context/AuthContext';
import { useContract } from '../../utils/context/ContractContext';
// import ProtectedRoute from '../../HOC/ProtectedRoute';

const Dashboard = () => {
  const {user, org} = useAuth();
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
  
  return (
    // <ProtectedRoute>
      <Flex bg='#f9fbff' w='100%' direction='row'>
        <Box position='relative'>
          <Sidebar />
        </Box>
        <Box pos='relative' overflowY='auto' w='full' h='100vh' py='8' px='12'>
          <Outlet />
        </Box>
      </Flex>
    // {/* </ProtectedRoute> */}
  );
};

export default Dashboard;
