import { ApiCreatePersonal } from '@/api/personal';
import InputForm from '@/component/InputForm';
import ModalAccountCredential from '@/component/ModalAccountCredential';
import useStore, { IUser } from '@/provider/zustand/store';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';

interface IDataForm {
  id: string;
  nickname: string;
  fullname: string;
  title1: string;
  title2: string;
  expertise: string;
  passion: string;
  goal: string;
  noTelfon: string;
}
interface IProps {
  state?: 'create' | 'update';
  dataForm?: IDataForm;
}

export default function FormProfesional(props: IProps) {
  const user = useStore((state) => state.user);
  const [stateForm, setStateForm] = useState('create');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    nickname: '',
    fullname: '',
    title1: '',
    title2: '',
    expertise: '',
    passion: '',
    goal: '',
    noTelfon: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = createStandaloneToast();
  const setPageView = useStore((state) => state.setPageView);

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitRegister = () => {
    if (stateForm === 'create') {
      if (user) {
        onSuccessLogin(user);
      } else {
        onOpen();
      }
    } else {
      // update
    }
  };

  const onSuccessLogin = async (userNew: IUser) => {
    onClose();
    if (userNew) {
      setLoading(true);
      const res = await ApiCreatePersonal({
        ...form,
        userId: userNew._id,
      });
      if (res.status === 200) {
        toast({
          position: 'bottom',
          title: 'Success',
          description: res.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setPageView('dashboard');
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
    }
  };

  useEffect(() => {
    if (props.state === 'update' && props.dataForm) {
      setForm({
        nickname: props.dataForm.nickname,
        fullname: props.dataForm.fullname,
        title1: props.dataForm.title1,
        title2: props.dataForm.title2,
        expertise: props.dataForm.expertise,
        passion: props.dataForm.passion,
        goal: props.dataForm.goal,
        noTelfon: props.dataForm.noTelfon,
      });
      setStateForm('update');
    }
  }, [props.state]);

  return (
    <>
      <Box
        padding='24px 32px 32px 32px'
        width='450px'
        background='linear-gradient(180deg, rgba(0, 0, 0, 0.3) -5.9%, rgba(0, 0, 0, 0) 147.74%)'
        backdropFilter='blur(2px)'
        borderRadius='12px'
      >
        <Flex alignItems='center' gap='12px'>
          <Text
            fontWeight='600'
            fontSize='16px'
            lineHeight='150%'
            w='full'
            color='#FFFFFF'
          >
            Hi, you can call me
          </Text>
          <InputForm
            value={form.nickname}
            name='nickname'
            onChange={onChangeForm}
            isRequired={false}
            width='221px'
            heigth='44px'
            placeholder='Nickname'
          />
        </Flex>
        <Box mt='48px' />
        <VStack spacing='16px'>
          <InputForm
            value={form.fullname}
            name='fullname'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='40px'
            placeholder='Full name'
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
            value={form.title1}
            name='title1'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='40px'
            placeholder='Title (e.g. Product Manager)'
            leftIcon={
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.33228 5.83317L3.33228 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M0.833414 5.8335L19.1667 5.8335'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.33342 8.3335L16.6667 8.3335'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.6669 11.6665H16.6667'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.6667 5.83317L16.6667 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.6663 5.83317L11.6663 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.1663 8.3332L14.1663 9.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.1663 11.6667L14.1663 12.5'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
          />
          <InputForm
            value={form.title2}
            name='title2'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='40px'
            placeholder='Title (e.g. Financial team)'
            leftIcon={
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.33228 5.83317L3.33228 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M0.833414 5.8335L19.1667 5.8335'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.33342 8.3335L16.6667 8.3335'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.6669 11.6665H16.6667'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.6667 5.83317L16.6667 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.6663 5.83317L11.6663 14.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.1663 8.3332L14.1663 9.1665'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.1663 11.6667L14.1663 12.5'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
          />
          <InputForm
            value={form.expertise}
            name='expertise'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='211px'
            isTextarea={true}
            placeholder='Describe your expertise and relevant qualifications'
          />
          <InputForm
            value={form.passion}
            name='passion'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='211px'
            isTextarea={true}
            placeholder='What are your passions outside of work? (e.g. writing, photography, playing an instrument)'
          />
          <InputForm
            value={form.goal}
            name='goal'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='40px'
            placeholder='Describe about your life plan or goal'
            leftIcon={
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41602 10.4614H4.79102C4.79102 10.4759 4.79153 10.4905 4.79254 10.505L5.41602 10.4614ZM6.06768 11.033V10.408C6.05504 10.408 6.0424 10.4084 6.02979 10.4092L6.06768 11.033ZM13.9302 11.033L14.004 10.4124C13.9795 10.4095 13.9548 10.408 13.9302 10.408V11.033ZM14.4831 10.7691L15.0121 11.1019L14.4831 10.7691ZM14.4818 10.1564L15.0095 9.82132C15.0032 9.81142 14.9966 9.80169 14.9898 9.79216L14.4818 10.1564ZM12.8685 7.90636L13.3765 7.54213L13.3716 7.53552L12.8685 7.90636ZM12.8685 7.29719L13.3717 7.66806L13.3764 7.66139L12.8685 7.29719ZM14.4818 5.04719L14.9898 5.41139C14.9966 5.40186 15.0032 5.39213 15.0095 5.38223L14.4818 5.04719ZM14.4831 4.43449L15.0121 4.10162V4.10162L14.4831 4.43449ZM13.9302 4.17052V4.79552C13.9548 4.79552 13.9795 4.79407 14.004 4.79116L13.9302 4.17052ZM6.06768 4.17052L6.02979 4.79437C6.0424 4.79514 6.05504 4.79552 6.06768 4.79552V4.17052ZM5.41602 4.74219L4.79254 4.69852C4.79153 4.71305 4.79102 4.72762 4.79102 4.74219H5.41602ZM6.04102 10.4614C6.04102 10.1162 5.76119 9.83636 5.41602 9.83636C5.07084 9.83636 4.79102 10.1162 4.79102 10.4614H6.04102ZM4.79102 15.8372C4.79102 16.1824 5.07084 16.4622 5.41602 16.4622C5.76119 16.4622 6.04102 16.1824 6.04102 15.8372H4.79102ZM4.79254 10.505C4.84012 11.1842 5.42602 11.6982 6.10558 11.6569L6.02979 10.4092C6.02962 10.4092 6.03009 10.4091 6.03099 10.4093C6.03186 10.4094 6.03275 10.4096 6.03357 10.4099C6.03514 10.4105 6.03598 10.4111 6.03639 10.4114C6.0368 10.4118 6.03752 10.4125 6.03827 10.414C6.03866 10.4148 6.039 10.4157 6.03923 10.4165C6.03947 10.4174 6.0395 10.4179 6.03949 10.4177L4.79254 10.505ZM6.06768 11.658H13.9302V10.408H6.06768V11.658ZM13.8564 11.6537C14.3158 11.7083 14.7657 11.4935 15.0121 11.1019L13.9541 10.4362C13.9647 10.4193 13.9841 10.41 14.004 10.4124L13.8564 11.6537ZM15.0121 11.1019C15.2585 10.7103 15.2575 10.2119 15.0095 9.82132L13.9542 10.4914C13.9435 10.4746 13.9435 10.4531 13.9541 10.4362L15.0121 11.1019ZM14.9898 9.79216L13.3764 7.54216L12.3606 8.27056L13.9739 10.5206L14.9898 9.79216ZM13.3716 7.53552C13.4006 7.57491 13.4007 7.62863 13.3716 7.66803L12.3654 6.92635C12.0694 7.32797 12.0694 7.87557 12.3654 8.2772L13.3716 7.53552ZM13.3764 7.66139L14.9898 5.41139L13.9739 4.68299L12.3606 6.93299L13.3764 7.66139ZM15.0095 5.38223C15.2575 4.99166 15.2585 4.4932 15.0121 4.10162L13.9541 4.76737C13.9435 4.75048 13.9435 4.72899 13.9542 4.71215L15.0095 5.38223ZM15.0121 4.10162C14.7657 3.71003 14.3158 3.49528 13.8564 3.54989L14.004 4.79116C13.9841 4.79351 13.9647 4.78425 13.9541 4.76737L15.0121 4.10162ZM13.9302 3.54552H6.06768V4.79552H13.9302V3.54552ZM6.10558 3.54667C5.42602 3.5054 4.84012 4.01937 4.79254 4.69852L6.03949 4.78586C6.0395 4.7857 6.03947 4.78616 6.03923 4.78704C6.039 4.78789 6.03866 4.78874 6.03827 4.78952C6.03752 4.79101 6.0368 4.79176 6.03639 4.79212C6.03598 4.79247 6.03514 4.79309 6.03357 4.79364C6.03275 4.79393 6.03186 4.79415 6.03099 4.79427C6.03009 4.7944 6.02962 4.79436 6.02979 4.79437L6.10558 3.54667ZM4.79102 4.74219V10.4614H6.04102V4.74219H4.79102ZM4.79102 10.4614V13.5821H6.04102V10.4614H4.79102ZM4.79102 13.5821V15.8372H6.04102V13.5821H4.79102Z'
                  fill='white'
                />
              </svg>
            }
          />
          <InputForm
            value={form.noTelfon}
            name='noTelfon'
            onChange={onChangeForm}
            isRequired={false}
            width='full'
            heigth='40px'
            type='number'
            placeholder='Whatsapp number'
            leftIcon={
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.0964 12.2515L11.6646 12.9165C9.34649 11.753 7.91459 10.4165 7.08125 8.33317L7.72288 4.89142L6.51002 1.6665L3.38418 1.6665C2.4446 1.6665 1.7047 2.44295 1.84503 3.372C2.19535 5.69142 3.22833 9.89691 6.24792 12.9165C9.41895 16.0875 13.9861 17.4635 16.4997 18.0105C17.4703 18.2217 18.3313 17.4644 18.3313 16.4711L18.3312 13.4842L15.0964 12.2515Z'
                  stroke='white'
                  stroke-width='1.24995'
                  stroke-linecap='round'
                  stroke-linejoin='round'
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
          onClick={submitRegister}
          isLoading={loading}
        >
          {stateForm === 'create' ? 'Register' : 'Update'}
        </Button>
      </Box>
      <ModalAccountCredential
        onSuccess={onSuccessLogin}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}
