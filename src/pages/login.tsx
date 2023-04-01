import { ApiLogin } from '@/api/auth';
import InputForm from '@/component/InputForm';
import { localCookieSaveToken } from '@/lib/Cookies/AppCookies';
import useStore from '@/provider/zustand/store';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';

export default function Login() {
  const setUser = useStore((state) => state.setUser);
  const setPageView = useStore((state) => state.setPageView);
  const [loading, setLoading] = useState(false);
  const { toast } = createStandaloneToast();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = async () => {
    setLoading(true);
    const res = await ApiLogin({
      email_username: form.email,
      password: form.password,
    });
    if (res.status === 200) {
      toast({
        position: 'bottom',
        title: 'Success',
        description: 'Success Login',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setUser(res.data.data);
      setPageView('dashboard');
      localCookieSaveToken(res.data.data.token);
      Router.push('/card');
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
    setLoading(false);
  };

  return (
    <Box>
      <Flex
        background='radial-gradient(61.47% 78.85% at 50% 50%, #344047 0%, #20253D 100%)'
        minH='100vh'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Box
          position='absolute'
          top='50px'
          right='41px'
          _hover={{ cursor: 'pointer' }}
        >
          <Link href='/'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L6.46967 16.4697ZM12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L12.5303 12.5303ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L11.4697 11.4697ZM17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L17.5303 7.53033ZM12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L12.5303 11.4697ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L7.53033 6.46967ZM7.53033 17.5303L12.5303 12.5303L11.4697 11.4697L6.46967 16.4697L7.53033 17.5303ZM12.5303 12.5303L17.5303 7.53033L16.4697 6.46967L11.4697 11.4697L12.5303 12.5303ZM11.4697 12.5303L16.4697 17.5303L17.5303 16.4697L12.5303 11.4697L11.4697 12.5303ZM12.5303 11.4697L7.53033 6.46967L6.46967 7.53033L11.4697 12.5303L12.5303 11.4697Z'
                fill='white'
              />
            </svg>
          </Link>
        </Box>
        <Text
          fontWeight='700'
          fontSize='40px'
          lineHeight='60px'
          textAlign='center'
          color='#FFFFFF'
        >
          Go to Your Link
        </Text>
        <Text
          mt='24px'
          fontWeight='600'
          fontSize='20px'
          lineHeight='30px'
          textAlign='center'
          color='#919CAC'
        >
          Customize your link
        </Text>
        <Box
          mt='6%'
          width='364px'
          borderRadius='12px'
          padding='32px'
          background='linear-gradient(180deg, rgba(0, 0, 0, 0.3) -5.9%, rgba(0, 0, 0, 0) 147.74%)'
          backdropFilter='blur(2px)'
        >
          <VStack spacing='24px'>
            <InputForm
              value={form.email}
              name='email'
              onChange={onChangeForm}
              isRequired={false}
              width='full'
              heigth='40px'
              type='email'
              placeholder='Email'
              leftIcon={
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.16699 16.6666V15.8333C4.16699 12.6117 6.77865 10 10.0003 10V10C13.2219 10 15.8336 12.6117 15.8336 15.8333V16.6666'
                    stroke='white'
                    stroke-width='1.24999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10.0003 10.0001C11.8413 10.0001 13.3336 8.50776 13.3336 6.66682C13.3336 4.82587 11.8413 3.3335 10.0003 3.3335C8.15937 3.3335 6.66699 4.82587 6.66699 6.66682C6.66699 8.50776 8.15937 10.0001 10.0003 10.0001Z'
                    stroke='white'
                    stroke-width='1.24999'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              }
            />
            <InputForm
              value={form.password}
              name='password'
              onChange={onChangeForm}
              isRequired={false}
              width='full'
              heigth='40px'
              type='password'
              placeholder='Password'
              leftIcon={
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M2.5 5.83317V14.1665C2.5 15.087 3.24619 15.8332 4.16667 15.8332H15.8333C16.7538 15.8332 17.5 15.087 17.5 14.1665V5.83317C17.5 4.9127 16.7538 4.1665 15.8333 4.1665H4.16667C3.24619 4.1665 2.5 4.9127 2.5 5.83317Z'
                    stroke='white'
                    stroke-width='1.25'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12.5 8.33317H15'
                    stroke='white'
                    stroke-width='1.25'
                    stroke-linecap='round'
                  />
                  <path
                    d='M12.5 10.8332H15'
                    stroke='white'
                    stroke-width='1.25'
                    stroke-linecap='round'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.16668 8.33317C9.16668 9.25365 8.42048 9.99984 7.50001 9.99984C6.57954 9.99984 5.83334 9.25365 5.83334 8.33317C5.83334 7.4127 6.57954 6.6665 7.50001 6.6665C7.94204 6.6665 8.36596 6.8421 8.67852 7.15466C8.99108 7.46722 9.16668 7.89114 9.16668 8.33317Z'
                    stroke='white'
                    stroke-width='1.25'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M4.16668 13.3331C6.48584 10.719 9.21001 11.5406 10.8333 13.3331'
                    stroke='white'
                    stroke-width='1.25'
                    stroke-linecap='round'
                  />
                </svg>
              }
            />
            <VStack mt='48px' w='full' spacing='12px'>
              <Button
                _hover={{}}
                _active={{}}
                width='full'
                height='48px'
                backgroundColor='#EF476F'
                borderRadius='8px'
                fontWeight='500'
                fontSize='16px'
                lineHeight='150%'
                color='#EFF3FA'
                isLoading={loading}
                onClick={loginUser}
              >
                Login
              </Button>
              <Link style={{ width: '100%' }} href='/?type="scroll"'>
                <Button
                  _hover={{}}
                  _active={{}}
                  width='full'
                  height='48px'
                  backgroundColor='transparent'
                  borderRadius='8px'
                  border='1px solid #FFFFFF'
                  fontWeight='500'
                  fontSize='16px'
                  lineHeight='150%'
                  color='#EFF3FA'
                  isLoading={loading}
                  // onClick={loginUser}
                >
                  Register
                </Button>
              </Link>
            </VStack>
            <Flex justifyContent='center' w='full'>
              <Link
                href='/forget-password'
                style={{
                  color: '#BCC7D8',
                  fontSize: '13px',
                  fontWeight: '500',
                }}
              >
                Forget Password
              </Link>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
