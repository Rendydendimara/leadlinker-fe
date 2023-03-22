import { ApiGetDetailBusinessOwner } from '@/api/businessOwner';
import { ApiGetDetailPersonal } from '@/api/personal';
import { IBusinessOwner } from '@/interface/IBusinessOwner';
import { IPersonal } from '@/interface/IPersonal';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DetailLink() {
  const router = useRouter();
  const [personal, setPersonal] = useState<IPersonal>();
  const [businessOwner, setBusinessOwner] = useState<IBusinessOwner>();
  const [isNotFound, setIsNotFound] = useState(false);
  const getLink = async (slug: string) => {
    const res = await Promise.all([
      ApiGetDetailPersonal({ type: 'by-slug', id: slug }),
      ApiGetDetailBusinessOwner({ type: 'by-slug', id: slug }),
    ]);
    if (res[0].status === 200) {
      setPersonal(res[0].data.data);
    }
    if (res[1].status === 200) {
      setBusinessOwner(res[1].data.data);
    }
    if (res[0].status !== 200 && res[1].status !== 200) {
      setIsNotFound(true);
    }
  };
  useEffect(() => {
    const { slug }: any = router.query;
    if (slug) {
      getLink(slug);
    }
  }, [router.query]);

  if (personal) {
    return <Box>{JSON.stringify(personal)}</Box>;
  }
  if (businessOwner) {
    return <Box>{JSON.stringify(businessOwner)}</Box>;
  }
  if (isNotFound) {
    return (
      <Flex
        background='radial-gradient(61.47% 78.85% at 50% 50%, #344047 0%, #20253D 100%)'
        minH='100vh'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Box textAlign='center' py={10} px={6}>
          <Heading
            display='inline-block'
            as='h2'
            size='2xl'
            bgGradient='linear(to-r, teal.400, teal.600)'
            backgroundClip='text'
            color='#FFFFFF'
          >
            Not Found
          </Heading>
          <Text color='#919CAC' fontSize='18px' mt={3} mb={2}>
            The page you’re looking for doesn’t exist.
          </Text>
          <Text color='#919CAC' mb={6}>
            Want this to be your username?{' '}
            <Link style={{ color: '#EF476F' }} href='/'>
              Create your Leadlinker now.
            </Link>
          </Text>
        </Box>
      </Flex>
    );
  }
  return <Box></Box>;
}
