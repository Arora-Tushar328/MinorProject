import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Pagination from '../../components/Pagination';
import Empty from '../../components/Empty';
import ContractAccordian from '../../components/ContractAccordian';
import { useContract } from '../../utils/context/ContractContext';
import { useAuth } from '../../utils/context/AuthContext';

const Pending = () => {
  // const { contracts } = useContract();
  const { user, org } = useAuth();
  const isInitialLoad = useRef(true);
  const { contracts, getMyContracts } = useContract();
  useEffect(() => {
    if (user) getMyContracts(user._id);
    if (org) getMyContracts(org.id);
  }, []);
  const [filter, setfilter] = useState({ status: 'pending', page: 1 });
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
          Pending
        </mark>{' '}
        Contract
      </Heading>
      <>
        {contracts.pending.length === 0 && (
          <Empty textContent="No Data Found!" />
        )}
        {contracts.pending.length !== 0 && (
          <>
            {contracts.pending.map(contract => (
              <ContractAccordian
                key={contract.data._id}
                data={contract}
                show={!user ? true : false}
                // removeContract={() => {
                //   setContracts((prev) =>
                //     prev.filter((item) => item._id !== contract._id),
                //   );
                // }}
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

export default Pending;
