import { ApiCreateBusinessOwner } from '@/api/businessOwner';
import ModalAccountCredential from '@/component/ModalAccountCredential';
import useStore, { IUser } from '@/provider/zustand/store';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
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
  const [loading, setLoading] = useState(false);
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
  const setPageView = useStore((state) => state.setPageView);
  const { toast } = createStandaloneToast();
  const [form, setForm] = useState<any>({
    business: {
      companyName: '',
      fullname: '',
      profession: '',
      location: '',
      YearBusiness: '',
      companyAbout: '',
    },
    personal: {
      nickname: '',
      fullname: '',
      hobbies: '',
      interest: '',
    },
    miscellaneous: {
      burningDesire: '',
      noOneKnowAboutMe: '',
      keySuccess: '',
    },
    network: {
      goals: '',
      accomplishment: '',
      interest: '',
      network: '',
      skill: '',
    },
  });

  const onChangeStep = (prevStep: string, nextStep: string) => {
    const index = findIndex(listStep, ['id', prevStep]);
    let nextListStep = listStep
      .slice(index + 1, listStep.length)
      .map((step) => {
        return {
          ...step,
          isPasses: false,
        };
      });
    setListStep([
      ...listStep.slice(0, index),
      {
        ...listStep[index],
        isPasses: true,
      },
      ...listStep.slice(index + 1, listStep.length),
    ]);
    setCurrentStep(nextStep);
  };

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: any
  ): void => {
    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        [event.target.name]: event.target.value,
      },
    });
  };

  const finishedSubmit = () => {
    onOpen();
  };

  const onSuccessLogin = async (userNew: IUser) => {
    onClose();
    if (userNew) {
      setLoading(true);
      const res = await ApiCreateBusinessOwner({
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

  const renderForm = () => {
    switch (currentStep) {
      case 'business':
        return (
          <FormBusiness
            companyName={form.business.companyName}
            fullname={form.business.fullname}
            profession={form.business.profession}
            location={form.business.location}
            YearBusiness={form.business.YearBusiness}
            companyAbout={form.business.companyAbout}
            onChangeForm={onChangeForm}
            nextSection={() => onChangeStep('business', 'personal')}
          />
        );
      case 'personal':
        return (
          <FormPersonal
            nickname={form.personal.nickname}
            fullname={form.personal.fullname}
            hobbies={form.personal.hobbies}
            interest={form.personal.interest}
            onChangeForm={onChangeForm}
            nextSection={() => onChangeStep('personal', 'miscellaneous')}
          />
        );
      case 'miscellaneous':
        return (
          <FormMiscellaneous
            burningDesire={form.miscellaneous.burningDesire}
            noOneKnowAboutMe={form.miscellaneous.noOneKnowAboutMe}
            keySuccess={form.miscellaneous.keySuccess}
            onChangeForm={onChangeForm}
            finishedSubmit={finishedSubmit}
            nextSection={() => onChangeStep('miscellaneous', 'network')}
          />
        );
      case 'network':
        return (
          <FormNetwork
            goals={form.network.goals}
            accomplishment={form.network.accomplishment}
            interest={form.network.interest}
            network={form.network.network}
            skill={form.network.skill}
            onChangeForm={onChangeForm}
            finishedSubmit={finishedSubmit}
          />
        );

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
                  onClick={() => onChangeStep(currentStep, step.id)}
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
      <ModalAccountCredential
        onSuccess={onSuccessLogin}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}
