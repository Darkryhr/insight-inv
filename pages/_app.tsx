import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
