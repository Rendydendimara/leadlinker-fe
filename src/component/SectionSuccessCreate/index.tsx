import { ApiGetDetailBusinessOwner } from '@/api/businessOwner';
import { ApiGetDetailPersonal } from '@/api/personal';
import { FRONTEND_URL } from '@/constant';
import useStore from '@/provider/zustand/store';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import SuccessForm from '../SuccessForm';

export default function SectionSuccessCreate() {
  const user = useStore((state) => state.user);
  const [link, setLink] = useState('');

  const getLink = async () => {
    const res = await Promise.all([
      ApiGetDetailPersonal({ type: 'by-user', id: user?._id ?? '' }),
      ApiGetDetailBusinessOwner({ type: 'by-user', id: user?._id ?? '' }),
    ]);
    if (res[0].status === 200) {
      setLink(`${FRONTEND_URL}${res[0].data.data.slug}`);
    }
    if (res[1].status === 200) {
      setLink(`${FRONTEND_URL}${res[1].data.data.slug}`);
    }
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <Flex
      background='radial-gradient(61.47% 78.85% at 50% 50%, #344047 0%, #20253D 100%)'
      minH='100vh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Text
        maxW='784px'
        fontWeight='700'
        fontSize='32px'
        lineHeight='150%'
        textAlign='center'
        color='#FFFFFF'
      >
        Empower Your Referral Network with LeadLinker
      </Text>
      <Text
        mt='7px'
        fontWeight='500'
        fontSize='16px'
        lineHeight='24px'
        textAlign='center'
        color='#919CAC'
        maxW='636px'
      >
        <Text as='span' color='#EF476F'>
          Unlock Your Business Networking Potential
        </Text>{' '}
        with LeadLinker - The Ultimate Tool for Tracking Referrals and Building
        Relationships
      </Text>
      <Box mt='70px'>
        <SuccessForm link={link} />
      </Box>
    </Flex>
  );
}
