import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/Layout';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  useEffect(() => {
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <Layout>
      <Toaster position='bottom-center' />
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
