import ModalAccountCredential from '@/component/ModalAccountCredential';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import classNames from 'classnames';
import { findIndex } from 'lodash';
import { useState } from 'react';
import style from './index.module.css';
import FormBusiness from './molecules/FormBusiness';
import FormMiscellaneous from './molecules/FormMiscellaneous';
import FormNetwork from './molecules/FormNetwork';
import FormPersonal from './molecules/FormPersonal';
interface IStep {
  name: string;
  id: string;
  isPasses: boolean;
}

export default function FormBusinessOwner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState('business');
  const [listStep, setListStep] = useState<IStep[]>([
    {
      name: 'Business',
      id: 'business',
      isPasses: false,
    },
    {
      name: 'Personal',
      id: 'personal',
      isPasses: false,
    },
    {
      name: 'Miscellaneous',
      id: 'miscellaneous',
      isPasses: false,
    },
    {
      name: 'Network',
      id: 'network',
      isPasses: false,
    },
  ]);

  const onChangeStep = (stepId: string) => {
    const index = findIndex(listStep, ['id', currentStep]);
    setListStep([
      ...listStep.slice(0, index),
      {
        ...listStep[index],
        isPasses: true,
      },
      ...listStep.slice(index + 1, listStep.length),
    ]);
    setCurrentStep(stepId);
  };

  const finishedSubmit = () => {
    onOpen();
  };

  const renderForm = () => {
    switch (currentStep) {
      case 'business':
        return <FormBusiness nextSection={() => onChangeStep('personal')} />;
      case 'personal':
        return (
          <FormPersonal nextSection={() => onChangeStep('miscellaneous')} />
        );
      case 'miscellaneous':
        return (
          <FormMiscellaneous
            finishedSubmit={finishedSubmit}
            nextSection={() => onChangeStep('network')}
          />
        );
      case 'network':
        return <FormNetwork finishedSubmit={finishedSubmit} />;

      default:
        break;
    }
  };

  return (
    <>
      <Flex gap='40px' alignItems='flex-start'>
        <Box width='156px'>
          <VStack spacing='20px' w='full' alignItems='flex-start'>
            {listStep.map((step: IStep, index: number) => (
              <Flex alignItems='center' gap='17px'>
                {step.isPasses && (
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 13L9 17L19 7'
                      stroke='#0B863C'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                )}
                <Text
                  className={classNames(
                    style.name,
                    currentStep === step.id && style.active
                  )}
                  onClick={() => onChangeStep(step.id)}
                >
                  {step.name}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
        <Box
          w='450px'
          padding='24px 32px 32px 32px'
          background='linear-gradient(180deg, rgba(0, 0, 0, 0.3) -5.9%, rgba(0, 0, 0, 0) 147.74%)'
          backdropFilter='blur(2px)'
          borderRadius='12px'
        >
          {renderForm()}
        </Box>
      </Flex>
      <ModalAccountCredential onClose={onClose} isOpen={isOpen} />
    </>
  );
}
