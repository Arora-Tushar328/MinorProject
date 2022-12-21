import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading } from '@chakra-ui/react';
// import DashboardLoader from '../../components/Loaders/DashboardLoader';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import ContractAccordian from '../../components/ContractAccordian';
import { useContract } from '../../utils/context/ContractContext';
import { useAuth } from '../../utils/context/AuthContext';

const Rejected = () => {
  const { user, org } = useAuth();
  const { contracts, getMyContracts } = useContract();

  const [filter, setfilter] = useState({ status: 'rejected', page: 1 });
  const [metadata, setMetaData] = useState([]);

  useEffect(() => {
    if (user) getMyContracts(user._id);
    if (org) getMyContracts(org.id);
  }, []);

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
          Rejected
        </mark>{' '}
        Contracts
      </Heading>
      <>
        {contracts.rejected.length === 0 && <Empty textContent="No Data Found!" />}
        {contracts.rejected.length !== 0 && (
          <>
            {contracts.rejected.map(contract => (
              <ContractAccordian key={contract._id} data={contract} />
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

export default Rejected;
