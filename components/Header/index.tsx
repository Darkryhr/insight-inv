import Link from 'next/link';
import { BiSolidDownArrow } from 'react-icons/bi';

const Header = () => {
  return (
    <header className='bg-none w-full sticky top-0 z-50 h-24 flex items-center'>
      <div className='mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between h-16 w-full'>
        <div className='flex-shrink-0 flex-1 justify-start'>
          <Link href='/' className='text-xl font-bold'>
            MySite
          </Link>
        </div>

        <nav
          className='hidden md:flex space-x-14 flex-1 justify-center'
          aria-label='Main navigation'
        >
          <Link href='#about' className='font-bold'>
            Home
          </Link>
          <Link href='#about' className=''>
            About us
          </Link>
          <Link href='#services' className=''>
            Our services
          </Link>
          <Link href='#faq' className=''>
            FAQ
          </Link>
        </nav>

        <div className='hidden md:flex items-center space-x-4 flex-1 justify-end'>
          <button className='text-sm font-bold flex items-center gap-1.5'>
            En
            <BiSolidDownArrow size={10} />
          </button>
          <Link
            href='/contact'
            className='bg-gray-50 text-brand py-3 px-8 font-semibold ml-4'
          >
            Contact us
          </Link>
        </div>

        <button
          className='md:hidden text-white text-lg'
          aria-label='Toggle navigation'
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
