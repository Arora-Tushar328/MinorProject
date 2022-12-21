import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading } from '@chakra-ui/react';
// import DashboardLoader from '../../components/Loaders/DashboardLoader';
// import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import Contract from '../../components/ContractAccordian';
import Pagination from '../../components/Pagination';
import { useContract } from '../../utils/context/ContractContext';
import { useAuth } from '../../utils/context/AuthContext';

const Approved = () => {
  const isInitialLoad = useRef(true);
  const { contracts, getMyContracts } = useContract();
  const { user, org } = useAuth();

  useEffect(() => {
    if (user) getMyContracts(user._id);
    if (org) getMyContracts(org.id);
  }, []);

  const [filter, setfilter] = useState({ status: 'approved', page: 1 });
  const [metadata, setMetaData] = useState([]);

  return (
    <Box>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={10}>
        <mark
          style={{
            backgroundColor: '#C3D0F9',
            borderRadius: '25px',
            padding: '0 12px 2px 12px',
            marginRight: '3px',
          }}
        >
          Approved
        </mark>{' '}
        Contracts
      </Heading>
      <>
        {contracts.accepted.length === 0 && (
          <Empty textContent="No Data Found!" />
        )}
        {contracts.accepted.length !== 0 && (
          <>
            {contracts.accepted.map(contract => (
              <Contract
                key={contract._id}
                data={contract}
                showUpdate={user ? false : true}
              />
            ))}
            <Pagination
              pageNumber={filter.page}
              setPageNumber={page => {
                setfilter(prev => ({ ...prev, page }));
              }}
              metadata={metadata}
            />
          </>
        )}
      </>
    </Box>
  );
};

export default Approved;
