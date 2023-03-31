import InputForm from '@/component/InputForm';
import { OPTIONS_INTEREST } from '@/constant';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface IProps {
  nextSection: () => void;
  homeCity: string;
  aboutMeDontKnow: string;
  skillNotShow: string;
  kids: string;
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
          I’m born
        </Text>
        <InputForm
          label='Your home city'
          value={props.homeCity}
          name='homeCity'
          onChange={(e) => props.onChangeForm(e, 'personal')}
          isRequired={false}
          width='281px'
          heigth='44px'
          placeholder='Your homeCity'
        />
      </Flex>
      <Box mt='24px' />
      <VStack spacing='16px'>
        <FormControl w='full'>
          <FormLabel mb='8px' fontSize='13px' fontWeight='500' color='#D8DDE3'>
            My interest
          </FormLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={props.interest}
            onChange={props.onChangeInterest}
            isMulti
            options={OPTIONS_INTEREST}
          />
        </FormControl>
        <InputForm
          label='Kids'
          value={props.kids}
          name='kids'
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
        <InputForm
          label='Another skill that you not show in company'
          value={props.skillNotShow}
          name='skillNotShow'
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
        <InputForm
          label='Something that people don’t know about you'
          value={props.aboutMeDontKnow}
          name='aboutMeDontKnow'
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
