import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';

export default function InputForm(props: IPropsInputForm) {
  if (props.isTextarea) {
    return (
      <FormControl
        isRequired={props.isRequired}
        marginBottom={props.isMb ? '16px' : 0}
      >
        {props.label && <FormLabel color='#D8DDE3'>{props.label}</FormLabel>}

        <Textarea
          padding='10px 12px 10px 12px'
          width={props.width ?? '300px'}
          borderStyle='none'
          height={props.heigth ?? '44px'}
          _hover={{ borderStyle: 'none' }}
          _active={{ borderStyle: 'none' }}
          _focusVisible={{ borderStyle: 'none' }}
          borderRadius='4px'
          _placeholder={{
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '150%',
            color: '#919CAC',
          }}
          color='white'
          fontSize='13px'
          // value={props.value}
          // name={props.name}
          // onChange={props.onChange}
          placeholder={props.placeholder}
          backgroundColor='rgba(48, 58, 71, 0.7)'
        />
      </FormControl>
    );
  }

  return (
    <FormControl
      isRequired={props.isRequired}
      marginBottom={props.isMb ? '16px' : 0}
    >
      {props.label && <FormLabel color='#D8DDE3'>{props.label}</FormLabel>}
      <InputGroup
        width={props.width ?? '300px'}
        height={props.heigth ?? '44px'}
        backgroundColor='rgba(48, 58, 71, 0.7)'
        borderRadius='4px'
        borderStyle='none'
      >
        {props.leftIcon && (
          <InputLeftElement pointerEvents='none' children={props.leftIcon} />
        )}
        <Input
          width={props.width ?? '300px'}
          borderStyle='none'
          height={props.heigth ?? '44px'}
          _hover={{ borderStyle: 'none' }}
          _active={{ borderStyle: 'none' }}
          _focusVisible={{ borderStyle: 'none' }}
          borderRadius='4px'
          _placeholder={{
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '150%',
            color: '#919CAC',
          }}
          type={props.type ?? 'text'}
          color='white'
          fontSize='13px'
          // value={props.value}
          // name={props.name}
          // onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </InputGroup>
    </FormControl>
  );
}

interface IPropsInputForm {
  label?: string;
  isRequired?: boolean;
  placeholder: string;
  // onChange: (e: any) => void;
  // value: string;
  leftIcon?: any;
  // name: string;
  isMb?: boolean;
  type?: string;
  width?: string;
  heigth?: string;
  isTextarea?: boolean;
}
