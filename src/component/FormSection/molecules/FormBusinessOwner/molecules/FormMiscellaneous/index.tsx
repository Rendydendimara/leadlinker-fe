import InputForm from '@/component/InputForm';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';

interface IProps {
  nextSection: () => void;
  finishedSubmit: () => void;
}

export default function FormMiscellaneous(props: IProps) {
  return (
    <>
      <VStack spacing='16px'>
        <InputForm
          isRequired={false}
          width='full'
          heigth='40px'
          placeholder='Burning desire to'
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
          isRequired={false}
          width='full'
          heigth='40px'
          placeholder='Something no one know about me'
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
          isRequired={false}
          width='full'
          heigth='40px'
          placeholder='My key to success'
          leftIcon={
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0013 18.3332C14.6037 18.3332 18.3346 14.6022 18.3346 9.99984C18.3346 5.39746 14.6037 1.6665 10.0013 1.6665C5.39893 1.6665 1.66797 5.39746 1.66797 9.99984C1.66797 14.6022 5.39893 18.3332 10.0013 18.3332Z'
                stroke='white'
                stroke-width='1.24995'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M2.08209 10.4165L6.66543 12.0832L5.83209 14.9998L6.66543 17.4998'
                stroke='white'
                stroke-width='1.24995'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M14.1685 17.0832L13.7518 14.9998L11.6685 14.1665V11.2498L14.1685 10.4165L17.9185 10.8332'
                stroke='white'
                stroke-width='1.24995'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.8339 4.58301L15.4172 5.83296L12.5007 6.24961V8.74951L14.5839 7.91621H16.2505L17.9171 8.74951'
                stroke='white'
                stroke-width='1.24995'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M2.08203 8.74951L4.16536 7.08284L6.2487 6.66618L7.91536 4.16618L7.08203 2.49951'
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
        onClick={props.finishedSubmit}
      >
        Finish & Submit
      </Button>
      <Button
        mt='20px'
        _hover={{}}
        _active={{}}
        width='full'
        height='48px'
        backgroundColor='transparent'
        border='1px solid #EF476F'
        borderRadius='8px'
        fontWeight='500'
        fontSize='16px'
        lineHeight='150%'
        color='#EFF3FA'
        onClick={props.nextSection}
      >
        Go to Network Section
      </Button>
    </>
  );
}
