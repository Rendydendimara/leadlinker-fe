import InputForm from '@/component/InputForm';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface IProps {
  nextSection: () => void;
  nickname: string;
  fullname: string;
  hobbies: string;
  onChangeInterest: (data: any) => void;
  interest: { value: string; label: string }[];
  onChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
}

export default function FormPersonal(props: IProps) {
  return (
    <>
      <Flex alignItems='center' gap='12px'>
        <Text
          fontWeight='600'
          fontSize='16px'
          lineHeight='150%'
          w='full'
          color='#FFFFFF'
        >
          Hi, I’m from
        </Text>
        <InputForm
          value={props.nickname}
          name='nickname'
          onChange={(e) => props.onChangeForm(e, 'personal')}
          isRequired={false}
          width='281px'
          heigth='44px'
          placeholder='Your nickname'
        />
      </Flex>
      <Box mt='24px' />
      <VStack spacing='16px'>
        <InputForm
          value={props.fullname}
          name='fullname'
          onChange={(e) => props.onChangeForm(e, 'personal')}
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
          value={props.hobbies}
          name='hobbies'
          onChange={(e) => props.onChangeForm(e, 'personal')}
          isRequired={false}
          width='full'
          heigth='40px'
          placeholder='Hobbies'
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
        <FormControl w='full'>
          <FormLabel color='#D8DDE3'>Interest</FormLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={props.interest}
            onChange={props.onChangeInterest}
            isMulti
            options={[
              { value: 'coding', label: 'Coding' },
              { value: 'traveling', label: 'Traveling' },
              { value: 'design', label: 'Design' },
              { value: 'product', label: 'Product' },
            ]}
          />
        </FormControl>
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
        onClick={props.nextSection}
      >
        Next
      </Button>
    </>
  );
}
