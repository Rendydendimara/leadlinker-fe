import FormSection from '@/component/FormSection';
import MainSection from '@/component/MainSection';
import SectionSuccessCreate from '@/component/SectionSuccessCreate';
import useStore from '@/provider/zustand/store';
import { Box, Flex, Text } from '@chakra-ui/layout';

export default function Home() {
  const pageView = useStore((state) => state.pageView);

  return (
    <Box>
      {pageView === 'form' ? (
        <>
          <MainSection />
          <FormSection />
        </>
      ) : (
        <SectionSuccessCreate />
      )}
    </Box>
  );
}
