import { ApiSendOTPResetPassword } from '@/api/auth';
import InputForm from '@/component/InputForm';
import { Alert, AlertIcon } from '@chakra-ui/alert';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
import { useState } from 'react';

export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const [msg, setMessage] = useState('');
  const { toast } = createStandaloneToast();
  const [form, setForm] = useState({
    email: '',
  });

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const forgetPassword = async () => {
    setLoading(true);
    const res = await ApiSendOTPResetPassword(form.email);
    if (res.status === 200) {
      toast({
        position: 'bottom',
        title: 'Success',
        description: res.data.message,
        status: 'success',
        duration: 10000,
        isClosable: true,
      });
      setMessage(res.data.message);
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
        <Text
          fontWeight='700'
          fontSize='40px'
          lineHeight='60px'
          textAlign='center'
          color='#FFFFFF'
        >
          Forget Password
        </Text>
        <Text
          mt='24px'
          fontWeight='600'
          fontSize='20px'
          lineHeight='30px'
          textAlign='center'
          color='#919CAC'
        >
          Reset the password using the token sent via email
        </Text>
        <Box
          mt='5%'
          width='364px'
          borderRadius='12px'
          padding='24px 32px 32px 32px'
          background='linear-gradient(180deg, rgba(0, 0, 0, 0.3) -5.9%, rgba(0, 0, 0, 0) 147.74%)'
          backdropFilter='blur(2px)'
        >
          {msg ? (
            <Alert status='success'>
              <AlertIcon />
              {msg}
            </Alert>
          ) : (
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
              <Button
                mt='48px'
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
                onClick={forgetPassword}
              >
                Forget Password
              </Button>
            </VStack>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
