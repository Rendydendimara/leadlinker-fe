import InputForm from '@/component/InputForm';
import { Button } from '@chakra-ui/button';
import { VStack } from '@chakra-ui/layout';

interface IProps {
  finishedSubmit: () => void;
  goals: string;
  accomplishment: string;
  interest: string;
  network: string;
  skill: string;
  onChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
}

export default function FormNetwork(props: IProps) {
  return (
    <>
      <VStack spacing='16px'>
        <InputForm
          value={props.goals}
          name='goals'
          onChange={(e) => props.onChangeForm(e, 'network')}
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Goals'
        />
        <InputForm
          value={props.accomplishment}
          name='accomplishment'
          onChange={(e) => props.onChangeForm(e, 'network')}
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Accomplishment'
        />
        <InputForm
          value={props.interest}
          name='interest'
          onChange={(e) => props.onChangeForm(e, 'network')}
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Interest'
        />
        <InputForm
          value={props.network}
          name='network'
          onChange={(e) => props.onChangeForm(e, 'network')}
          isRequired={false}
          width='full'
          heigth='137px'
          isTextarea={true}
          placeholder='Network'
        />
        <InputForm
          value={props.skill}
          name='skill'
          onChange={(e) => props.onChangeForm(e, 'network')}
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
        Finish & Create Link
      </Button>
    </>
  );
}
