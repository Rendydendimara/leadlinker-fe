import { ApiCreateBusinessOwner } from '@/api/businessOwner';
import ModalAccountCredential from '@/component/ModalAccountCredential';
import useStore, { IUser } from '@/provider/zustand/store';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { createStandaloneToast } from '@chakra-ui/toast';
import classNames from 'classnames';
import { findIndex } from 'lodash';
import { useEffect, useState } from 'react';
import style from './index.module.css';
import FormBusiness from './molecules/FormBusiness';
import FormMiscellaneous from './molecules/FormMiscellaneous';
import FormNetwork from './molecules/FormNetwork';
import FormPersonal from './molecules/FormPersonal';
import { SketchPicker } from 'react-color';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

interface IStep {
  name: string;
  id: string;
  isPasses: boolean;
}

interface IProps {
  state?: 'create' | 'update';
  dataForm?: any;
}

export default function FormBusinessOwner(props: IProps) {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState('business');
  const [stateForm, setStateForm] = useState('create');
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
      interest: [],
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
    background: '',
  });
  const [sketchPickerColor, setSketchPickerColor] = useState<any>({
    r: '0',
    g: '0',
    b: '0',
    a: '0',
  });

  const onChangeStep = (prevStep: string, nextStep: string) => {
    const index = findIndex(listStep, ['id', prevStep]);
    // let nextListStep = listStep
    //   .slice(index + 1, listStep.length)
    //   .map((step) => {
    //     return {
    //       ...step,
    //       isPasses: false,
    //     };
    //   });
    setListStep([
      ...listStep.slice(0, index),
      {
        ...listStep[index],
        isPasses: checkIsPasses(prevStep),
      },
      ...listStep.slice(index + 1, listStep.length),
    ]);
    setCurrentStep(nextStep);
  };

  const checkIsPasses = (stepId: string) => {
    switch (stepId) {
      case 'business':
        if (
          form.business.companyName &&
          form.business.fullname &&
          form.business.profession &&
          form.business.location &&
          form.business.YearBusiness &&
          form.business.companyAbout
        ) {
          return true;
        }
        return false;
      case 'personal':
        if (
          form.personal.nickname &&
          form.personal.hobbies &&
          form.personal.fullname &&
          form.personal.interest
        ) {
          return true;
        }
        return false;
      case 'miscellaneous':
        if (
          form.miscellaneous.burningDesire &&
          form.miscellaneous.noOneKnowAboutMe &&
          form.miscellaneous.keySuccess
        ) {
          return true;
        }
        return false;
      case 'network':
        if (
          form.network.goals &&
          form.network.accomplishment &&
          form.network.interest &&
          form.network.network &&
          form.network.skill
        ) {
          return true;
        }
        return false;
      default:
        return false;
    }
  };

  // const isAllInput = () => {
  //   if(props.YearBusiness && props.companyName && props.fullname && props.location && props.profession && props.companyAbout) {
  //     return true
  //   }
  //   return false
  // }

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
    if (stateForm === 'create') {
      onOpen();
    } else {
      // update
    }
  };

  const onSuccessLogin = async (userNew: IUser) => {
    onClose();
    if (userNew) {
      setLoading(true);
      let formData = form;
      const interest = form.personal.interest.map((inte: any) => inte.value);
      formData.personal.interest = interest;
      const res = await ApiCreateBusinessOwner({
        ...formData,
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

  const onChangeInterest = (data: any) => {
    setForm({
      ...form,
      personal: {
        ...form.personal,
        interest: data,
      },
    });
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
            onChangeInterest={onChangeInterest}
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

  useEffect(() => {
    if (props.state === 'update' && props.dataForm) {
      setForm({
        business: {
          companyName: props.dataForm.business.companyName,
          fullname: props.dataForm.business.fullname,
          profession: props.dataForm.business.profession,
          location: props.dataForm.business.location,
          YearBusiness: props.dataForm.business.YearBusiness,
          companyAbout: props.dataForm.business.companyAbout,
        },
        personal: {
          nickname: props.dataForm.personal.nickname,
          fullname: props.dataForm.personal.fullname,
          hobbies: props.dataForm.personal.hobbies,
          interest: props.dataForm.personal.interest,
        },
        miscellaneous: {
          burningDesire: props.dataForm.miscellaneous.burningDesire,
          noOneKnowAboutMe: props.dataForm.miscellaneous.noOneKnowAboutMe,
          keySuccess: props.dataForm.miscellaneous.keySuccess,
        },
        network: {
          goals: props.dataForm.network.goals,
          accomplishment: props.dataForm.network.accomplishment,
          interest: props.dataForm.network.interest,
          network: props.dataForm.network.network,
          skill: props.dataForm.network.skill,
        },
      });
      setStateForm('update');
    }
  }, [props.state]);

  return (
    <>
      <Flex gap='40px' alignItems='flex-start' minH='100vh'>
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
          <FormControl w='full' mb='4'>
            <FormLabel color='#D8DDE3'>Background Color</FormLabel>
            <SketchPicker
              onChange={(color: any) => {
                setSketchPickerColor(color.rgb);
                setForm({ ...form, background: color.hex });
              }}
              className='widthFull'
              color={sketchPickerColor}
            />
          </FormControl>
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
