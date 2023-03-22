import { ApiLogin, ApiRegister } from '@/api/auth';
import InputForm from '@/component/InputForm';
import useStore, { IUser } from '@/provider/zustand/store';
import { Button } from '@chakra-ui/button';
import { Text, VStack } from '@chakra-ui/layout';
import {
  createStandaloneToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

interface IProps {
  onClose: () => void;
  isOpen: boolean;
  onSuccess: (user: IUser) => void;
}
export default function ModalAccountCredential(props: IProps) {
  const setUser = useStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);
  const { toast } = createStandaloneToast();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async () => {
    setLoading(true);
    if (form.password !== form.passwordConfirm) {
      toast({
        position: 'bottom',
        title: 'Error',
        description: 'Password confirm not match',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    const res = await ApiRegister({
      username: form.username,
      email: form.email,
      password: form.password,
    });
    if (res.status === 200) {
      toast({
        position: 'bottom',
        title: 'Success',
        description: 'Success Register',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setUser(res.data.data);
      props.onSuccess(res.data.data);
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
    <Modal onClose={props.onClose} isOpen={props.isOpen} isCentered>
      <ModalOverlay blur='xl' />
      <ModalContent
        width='364px'
        // height='388px'
        borderRadius='12px'
        padding='24px 32px 32px'
        bgColor='#000000'
        backdropFilter='blur(2px)'
      >
        <ModalBody p='0' pt='0' pb='0' pl='0' pr='0' flex='unset'>
          <Text
            textAlign='center'
            fontWeight='600'
            fontSize='16px'
            lineHeight='150%'
            color='#FFFFFF'
          >
            Set account credential
          </Text>
          <VStack mt='48px' spacing='16px'>
            <InputForm
              value={form.username}
              name='username'
              onChange={onChangeForm}
              isRequired={false}
              width='full'
              heigth='40px'
              placeholder='Username'
              leftIcon={
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.33237 7.50833L8.3407 7.49907'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 7.50833L11.6768 7.49907'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.33237 10.8418L8.3407 10.8326'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 10.8418L11.6768 10.8326'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.33237 14.1753L8.3407 14.1661'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 14.1753L11.6768 14.1661'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.00061 17V4.66665C5.00061 4.39052 5.22446 4.16667 5.50059 4.16667H10.0006V2.99998C10.0006 2.72385 10.2245 2.5 10.5006 2.5H14.5006C14.7768 2.5 15.0006 2.72385 15.0006 2.99998V17C15.0006 17.2762 14.7768 17.5 14.5006 17.5H5.50059C5.22446 17.5 5.00061 17.2762 5.00061 17Z'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              }
            />
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
                    d='M8.33237 7.50833L8.3407 7.49907'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 7.50833L11.6768 7.49907'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.33237 10.8418L8.3407 10.8326'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 10.8418L11.6768 10.8326'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.33237 14.1753L8.3407 14.1661'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.6684 14.1753L11.6768 14.1661'
                    stroke='white'
                    stroke-width='1.24995'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.00061 17V4.66665C5.00061 4.39052 5.22446 4.16667 5.50059 4.16667H10.0006V2.99998C10.0006 2.72385 10.2245 2.5 10.5006 2.5H14.5006C14.7768 2.5 15.0006 2.72385 15.0006 2.99998V17C15.0006 17.2762 14.7768 17.5 14.5006 17.5H5.50059C5.22446 17.5 5.00061 17.2762 5.00061 17Z'
                    stroke='white'
                    stroke-width='1.24995'
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
            <InputForm
              value={form.passwordConfirm}
              name='passwordConfirm'
              onChange={onChangeForm}
              isRequired={false}
              width='full'
              heigth='40px'
              type='password'
              placeholder='Repeat Password'
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
          </VStack>
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
            onClick={registerUser}
          >
            Submit
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
