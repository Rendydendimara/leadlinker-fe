import { ApiLogout } from '@/api/auth';
import { localCookieClearToken } from '@/lib/Cookies/AppCookies';
import { withprivateRoute } from '@/lib/withPrivateRoute';
import useStore from '@/provider/zustand/store';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CardPage = () => {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const resetUser = useStore((state) => state.resetUser);
  const { toast } = createStandaloneToast();

  const logOut = async () => {
    const res = await ApiLogout();
    if (res.status === 200) {
      localCookieClearToken();
      resetUser();
      router.replace('/');
    } else {
      toast({
        position: 'bottom',
        title: 'Error',
        description: res.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box pt='30px' bgColor='#303A47' minH='100vh'>
      <Flex mr='36px' justifyContent='flex-end'>
        <Flex gap='8px' alignItems='center'>
          <Box>
            <Link href='/'>
              <svg
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.7961 13.1937L15.8011 8.36623L12.3653 4.94123C11.3284 3.90891 9.65217 3.90891 8.61531 4.94123L5.18701 8.3579V13.1912C5.18977 14.6531 6.37682 15.836 7.83865 15.8337H13.1444C14.6053 15.836 15.7919 14.6546 15.7961 13.1937Z'
                  stroke='white'
                  stroke-width='1.24999'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.4186 5.01562C16.4186 4.67045 16.1388 4.39063 15.7936 4.39063C15.4485 4.39063 15.1687 4.67045 15.1687 5.01562H16.4186ZM15.7936 8.36646H15.1687C15.1687 8.53255 15.2348 8.69181 15.3524 8.80908L15.7936 8.36646ZM16.7074 10.1599C16.9518 10.4036 17.3476 10.403 17.5913 10.1586C17.835 9.9141 17.8343 9.51838 17.5899 9.27467L16.7074 10.1599ZM5.62002 8.80074C5.86446 8.55704 5.86507 8.16131 5.62136 7.91686C5.37766 7.67241 4.98193 7.67181 4.73749 7.91551L5.62002 8.80074ZM3.37416 9.27468C3.12972 9.51838 3.12911 9.91411 3.37282 10.1586C3.61652 10.403 4.01225 10.4036 4.25669 10.1599L3.37416 9.27468ZM11.5317 15.834C11.5317 16.1792 11.8116 16.459 12.1567 16.459C12.5019 16.459 12.7817 16.1792 12.7817 15.834H11.5317ZM8.19844 15.834C8.19844 16.1792 8.47826 16.459 8.82344 16.459C9.16862 16.459 9.44844 16.1792 9.44844 15.834H8.19844ZM15.1687 5.01562V8.36646H16.4186V5.01562H15.1687ZM15.3524 8.80908L16.7074 10.1599L17.5899 9.27467L16.2349 7.92384L15.3524 8.80908ZM4.73749 7.91551L3.37416 9.27468L4.25669 10.1599L5.62002 8.80074L4.73749 7.91551ZM12.7817 15.834V14.3507H11.5317V15.834H12.7817ZM12.7817 14.3507C12.7817 13.085 11.7557 12.059 10.4901 12.059V13.309C11.0654 13.309 11.5317 13.7754 11.5317 14.3507H12.7817ZM10.4901 12.059C9.22444 12.059 8.19844 13.085 8.19844 14.3507H9.44844C9.44844 13.7754 9.91481 13.309 10.4901 13.309V12.059ZM8.19844 14.3507V15.834H9.44844V14.3507H8.19844Z'
                  fill='white'
                />
              </svg>
            </Link>
          </Box>
          <Text
            color='white'
            fontWeight='500'
            fontSize='13px'
            lineHeight='150%'
            _hover={{ cursor: 'pointer' }}
            onClick={logOut}
          >
            Logout
          </Text>
        </Flex>
      </Flex>
      <Flex h='92vh' justifyContent='center' alignItems='center'>
        <Box
          maxW='363px'
          bgColor='white'
          borderRadius='12px'
          padding='24px 24px 32px'
        >
          <Image src='/images/image 9.png' width='315px' height='250px' />
          <Box mt='12px'>
            <Text
              fontWeight='500'
              fontSize='10px'
              lineHeight='125%'
              color='#070D12'
            >
              Senior Product Designer at Athena
            </Text>
            <Text
              mt='4px'
              fontWeight='600'
              fontSize='20px'
              lineHeight='150%'
              color='#070D12'
            >
              Daniel Roy
            </Text>
            <Text
              fontWeight='400'
              fontSize='14px'
              lineHeight='145%'
              color='#555F6D'
            >
              7 years experience in tech industry, having a up and down for many
              aspect. Already work in multiple role. Growing up in hard and
              small city, keep growing to expert in design system
            </Text>
            <Button
              bgColor='#0353A4'
              borderRadius='6px'
              width='315px'
              height='38px'
              color='#EFF3FA'
              fontWeight='500'
              fontSize='14px'
              lineHeight='125%'
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default withprivateRoute(CardPage);
