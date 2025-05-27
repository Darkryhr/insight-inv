import { useRouter } from 'next/router';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = ({ children }) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <main className={`${locale === 'en' ? 'font-english' : 'font-hebrew'}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
