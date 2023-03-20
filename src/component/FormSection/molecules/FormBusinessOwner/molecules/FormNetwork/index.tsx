import InputForm from '@/component/InputForm';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';

interface IProps {
  finishedSubmit: () => void;
}

export default function FormNetwork(props: IProps) {
  return (
    <>
      <VStack spacing='16px'>
        <InputForm
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Goals'
        />
        <InputForm
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Accomplishment'
        />
        <InputForm
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Interest'
        />
        <InputForm
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Network'
        />
        <InputForm
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Skill'
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
    </>
  );
}
