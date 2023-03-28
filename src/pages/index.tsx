import { ApiGetDetailBusinessOwner } from '@/api/businessOwner';
import { ApiGetDetailPersonal } from '@/api/personal';
import FormSection from '@/component/FormSection';
import FormBusinessOwner from '@/component/FormSection/molecules/FormBusinessOwner';
import FormProfesional from '@/component/FormSection/molecules/FormProfesional';
import MainSection from '@/component/MainSection';
import SectionSuccessCreate from '@/component/SectionSuccessCreate';
import useStore from '@/provider/zustand/store';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';

export default function Home() {
  const pageView = useStore((state) => state.pageView);
  const user = useStore((state) => state.user);
  const [formType, setFormType] = useState<{
    type: string;
    data: any;
  }>({
    type: '',
    data: {},
  });

  const getUserTypeForm = async () => {
    const res = await Promise.all([
      ApiGetDetailPersonal({ type: 'by-user', id: user?._id ?? '' }),
      ApiGetDetailBusinessOwner({ type: 'by-user', id: user?._id ?? '' }),
    ]);
    if (res[0].status === 200) {
      setFormType({
        type: 'profesional',
        data: res[0].data.data,
      });
    }
    if (res[1].status === 200) {
      setFormType({
        type: 'business',
        data: res[1].data.data,
      });
    }
  };

  useEffect(() => {
    getUserTypeForm();
  }, [user]);

  return (
    <Box>
      {user ? (
        <>
          <SectionSuccessCreate />
          <Flex
            id='formsection'
            flexDirection='column'
            py='90px'
            justifyContent='center'
            alignItems='center'
            background='radial-gradient(61.47% 78.85% at 50% 50%, #232323 0%, #0B0B0B 100%)'
          >
            <Box mb='4'>
              <Text
                //styleName: Web/H3/H3: Bold;
                fontSize='25px'
                fontWeight='700'
                color='white'
              >
                Update Data
              </Text>
              <Text
                fontWeight='400'
                fontSize='20px'
                lineHeight='150%'
                color='#ef476f'
              >
                {formType.type === 'profesional'
                  ? 'as Professional'
                  : 'as Business Owner'}
              </Text>
            </Box>
            {formType.type === 'profesional' ? (
              <FormProfesional state='update' dataForm={formType.data} />
            ) : formType.type === 'business' ? (
              <FormBusinessOwner state='update' dataForm={formType.data} />
            ) : undefined}
          </Flex>
        </>
      ) : (
        <>
          <MainSection />
          <FormSection />
        </>
      )}
    </Box>
  );
}
