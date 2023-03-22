import { Button } from '@chakra-ui/button';
import { useClipboard } from '@chakra-ui/hooks';
import { Flex, Text } from '@chakra-ui/layout';
import InputForm from '../InputForm';

interface IProps {
  link: string;
}

export default function SuccessForm(props: IProps) {
  const { onCopy, hasCopied } = useClipboard(props.link);

  return (
    <Flex
      maxW='364px'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      background='linear-gradient(180deg, rgba(0, 0, 0, 0.3) -5.9%, rgba(0, 0, 0, 0) 147.74%)'
      backdropFilter='blur(2px)'
      borderRadius='12px'
      padding='24px 32px 32px'
    >
      <Text
        fontWeight='600'
        fontSize='16px'
        lineHeight='150%'
        textAlign='center'
        color='#FFFFFF'
      >
        Thank you
      </Text>
      <Text
        mt='12px'
        color='#FBFDFF'
        fontWeight='500'
        fontSize='13px'
        lineHeight='150%'
        textAlign='center'
      >
        Nice to meet you and we can continue again
      </Text>
      <Button
        _hover={{}}
        mt='24px'
        width='300px'
        height='48px'
        backgroundColor='#EF476F'
        borderRadius='8px'
        fontWeight='500'
        fontSize='16px'
        lineHeight='150%'
        color='#EFF3FA'
      >
        Continue
      </Button>
      <Flex alignItems='center' gap='5px' mt='24px'>
        <InputForm
          isRequired={false}
          width='full'
          heigth='40px'
          value={props.link}
          disabled={true}
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
        <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
      </Flex>
    </Flex>
  );
}
