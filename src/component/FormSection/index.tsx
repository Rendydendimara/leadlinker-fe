import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import classNames from 'classnames';
import { useState } from 'react';
import InputForm from '../InputForm';
import style from './index.module.css';
import FormBusinessOwner from './molecules/FormBusinessOwner';
import FormProfesional from './molecules/FormProfesional';

export default function FormSection() {
  const [confirmationForm, setConfirmationForm] = useState(false);
  const [activeView, setActiveView] =
    useState<'profesional' | 'business-owner'>('profesional');

  const onChangeActiveView = (type: 'profesional' | 'business-owner') => {
    setActiveView(type);
  };

  const openConfirmation = () => {
    setConfirmationForm(true);
  };
  return (
    <Flex
      id='formsection'
      flexDirection='column'
      py='90px'
      justifyContent='center'
      alignItems='center'
      background='radial-gradient(61.47% 78.85% at 50% 50%, #232323 0%, #0B0B0B 100%)'
    >
      <Flex alignItems='center' gap='44px' mb='26px'>
        <Text
          className={classNames(
            style.title,
            activeView === 'profesional' && style.active
          )}
          onClick={() => onChangeActiveView('profesional')}
        >
          as Professional
        </Text>
        <Text
          onClick={() => onChangeActiveView('business-owner')}
          className={classNames(
            style.title,
            activeView === 'business-owner' && style.active
          )}
        >
          as Business Owner
        </Text>
      </Flex>
      <Text
        maxW='723px'
        fontWeight='500'
        fontSize='16px'
        lineHeight='150%'
        textAlign='center'
        color='#919CAC'
        mb='40px'
      >
        Make a great first impression with customize your introduction, connect
        with colleagues, and build lasting relationships within your
        organization. Not a replacement for LinkedIn, but a quick and effortless
        way to establish meaningful connections.
      </Text>
      {activeView === 'profesional' ? (
        <FormProfesional />
      ) : (
        <FormBusinessOwner />
      )}
    </Flex>
  );
}
