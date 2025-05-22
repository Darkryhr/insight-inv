import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = ({ children }) => {
  return (
    <main className='font-display no-scrollbar'>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
