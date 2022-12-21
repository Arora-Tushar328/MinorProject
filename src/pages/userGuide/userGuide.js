import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import UserPic from '../../pictures/steps.png';
import StepsCard from './stepsCard';
import payIcon from '../../pictures/pay.png';
import userIcon from '../../pictures/user1.jpg';
import allocationcon from '../../pictures/allocate.jpg';
import PictureCard from '../cards/pictureCard';
import DataCard from '../cards/dataCard';
import CardDisplay from '../cards/cardDisplay';

function UserGuide() {
  return (
    <CardDisplay>
      <PictureCard myPicture={UserPic} />
      <DataCard>
        <Text
          textAlign={{ base: 'center', md: 'left' }}
          color="#0077B6"
          fontWeight="bold"
          fontSize="4xl"
          mb="3%"
        >
          User guide Steps
        </Text>
        <Stack>
          <Text
            color="blue.700"
            pb="3%"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Besome water101 member in the easiest way just simple, fast and
            accurate steps. It won’t take your time to experience.
          </Text>
          <Stack color="#0077B6" w="100%" spacing={8} direction="column">
            <StepsCard
              myIcon={userIcon}
              title="Step 1: Sign Up"
              desc="Sign up with google account or provide email address together with password if your to an organization"
            />
            <StepsCard
              myIcon={payIcon}
              title="Step 2: Make Online Transctions"
              desc="Signing up for your own Peyme account is easy and
                free. Just connection with phone or gmail instandly"
            />
            <StepsCard
              myIcon={allocationcon}
              title="Step 3: Allocate Water and View Reports"
              desc="Online Transctions with Fast and safe transctions by using blockChain"
            />
          </Stack>
        </Stack>
      </DataCard>
    </CardDisplay>
  );
}

export default UserGuide;
