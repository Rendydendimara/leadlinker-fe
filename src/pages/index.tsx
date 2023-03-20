import FormSection from '@/component/FormSection';
import MainSection from '@/component/MainSection';
import { Box, Flex, Text } from '@chakra-ui/layout';

export default function Home() {
  return (
    <Box>
      <MainSection />
      <FormSection />
    </Box>
  );
}
