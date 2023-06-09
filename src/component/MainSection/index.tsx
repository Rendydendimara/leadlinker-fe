import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Link as LinkReactScroll,
  // DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function MainSection() {
  const [confirmationForm, setConfirmationForm] = useState(false);
  const router = useRouter();

  const openConfirmation = () => {
    setConfirmationForm(true);
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve('');
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('formsection', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    });

    // goToContainer.then(() =>
    //   scroller.scrollTo("scroll-container-second-element", {
    //     duration: 800,
    //     delay: 0,
    //     smooth: "easeInOutQuart",
    //     containerId: "scroll-container",
    //     offset: 50
    //   })
    // );
  };

  useEffect(() => {
    const { type } = router.query;
    if (type) {
      scrollToWithContainer();
    }
  }, [router.query]);

  return (
    <Flex
      background='radial-gradient(61.47% 78.85% at 50% 50%, #344047 0%, #20253D 100%)'
      minH='100vh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Text
        as='h2'
        maxW='794px'
        fontWeight='700'
        fontSize='50px'
        lineHeight='150%'
        textAlign='center'
        color='#FFFFFF'
      >
        Make Meaningful Connections with our Innovative Link
      </Text>
      <Text
        mt='24px'
        fontWeight='400'
        fontSize='20px'
        lineHeight='150%'
        textAlign='center'
        color='#919CAC'
        maxW='636px'
      >
        Introducing a Modern Way to Make Connections and Build Relationships
      </Text>
      <Flex mt='60px' alignItems='center' gap='24px'>
        {/* <a href='#formsection'> */}
        <Button
          _hover={{}}
          _active={{}}
          width='150px'
          height='44px'
          backgroundColor='#EF476F'
          borderRadius='8px'
          boxShadow='0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)'
          fontWeight='500'
          fontSize='16px'
          lineHeight='150%'
          color='#FFFFFF'
          onClick={scrollToWithContainer}
        >
          Create Link
        </Button>
        {/* </a> */}
        <Link href='/login'>
          <Button
            _hover={{}}
            _active={{}}
            width='150px'
            height='44px'
            border='1px solid #697381'
            borderRadius='8px'
            bgColor='transparent'
            fontWeight='500'
            fontSize='16px'
            lineHeight='150%'
            color='#FFFFFF'
            // onClick={openConfirmation}
          >
            Go to my link
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
