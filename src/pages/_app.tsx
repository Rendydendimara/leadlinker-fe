import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { useEffect } from 'react';
import {
  localCookieClearToken,
  localCookieLoadToken,
} from '@/lib/Cookies/AppCookies';
import { ApiCheckUserLogin } from '@/api/auth';
import useStore from '@/provider/zustand/store';
import Router from 'next/router';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const resetUser = useStore((state) => state.resetUser);
  const setUser = useStore((state) => state.setUser);

  const getUserLogin = async () => {
    const token = localCookieLoadToken();
    const res = await ApiCheckUserLogin(token ?? '');
    if (res.status === 200) {
      setUser(res.data.data);
    } else {
      localCookieClearToken();
      resetUser();
      // Router.push('/');
    }
  };

  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
