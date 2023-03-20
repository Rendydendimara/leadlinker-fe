import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';

export default function SuccessForm() {
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
    </Flex>
  );
}
