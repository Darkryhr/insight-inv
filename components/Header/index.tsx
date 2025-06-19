import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState } from 'react';
import { BiHomeAlt, BiSolidDownArrow } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoIosClose, IoMdHelpCircleOutline } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import { VscTools } from 'react-icons/vsc';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation('header');

  const { locale, asPath } = router;

  const changeTo = locale === 'he' ? 'en' : 'he';

  const navigation = [
    { name: t('nav.home'), href: '#hero', icon: <BiHomeAlt size={20} /> },
    { name: t('nav.about'), href: '#about', icon: <FiUser size={20} /> },
    {
      name: t('nav.services'),
      href: '#services',
      icon: <VscTools size={20} />,
    },
    {
      name: t('nav.faq'),
      href: '#faq',
      icon: <IoMdHelpCircleOutline size={20} />,
    },
    { name: t('cta'), href: '#contact', icon: <MdMailOutline size={20} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-120px 0px 0px 0px', // top, right, bottom, left
      }
    );

    const hero = document.querySelector('#hero');
    if (hero) {
      observer.observe(hero);
      heroRef.current = hero;
    }

    const sections = document.querySelectorAll('section[data-section]');
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.6, // tweak as needed
        rootMargin: '0px 0px -40% 0px',
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      sections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 h-22 flex items-center transition-colors duration-300 ${
        isSticky ? 'bg-brand drop-shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between rtl:flex-row-reverse md:rtl:flex-row h-16 w-full'>
        <div className='flex-shrink-0 lg:flex-1 justify-start'>
          <Link
            href='/'
            className='hover:opacity-75 transition-opacity duration-200'
          >
            <Logo />
          </Link>
        </div>

        {/* === Desktop Navigation === */}
        <nav
          className='hidden lg:flex space-x-14 flex-1 justify-center items-center'
          aria-label='Main navigation'
        >
          {navigation.map(
            item =>
              item.href !== '#contact' && (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors capitalize duration-300 px-4 py-2 hover:text-zinc-50 ${
                    activeSection === item.name
                      ? 'border-b-2 font-bold'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.name}
                </a>
              )
          )}
        </nav>

        <div className='hidden lg:flex items-center space-x-4 flex-1 justify-end'>
          <Menu>
            {({ open }) => (
              <>
                <MenuButton className='text-sm font-bold items-center cursor-pointer inline-flex gap-2 shadow-inner focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white hover:opacity-80 transition-opacity duration-100'>
                  {t('locale')}
                  <BiSolidDownArrow
                    size={10}
                    className={`${
                      open ? 'rotate-180' : 'rotate-0'
                    } transition-transform duration-300`}
                  />
                </MenuButton>
                <MenuItems
                  transition
                  anchor='bottom end'
                  className='origin-top-right rounded-xl border border-white/5 bg-brand p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-50'
                >
                  <MenuItem>
                    <Link
                      href={asPath}
                      locale={changeTo}
                      className='group font-bold flex w-full items-center rounded-lg px-4 py-3 data-focus:bg-white/10 cursor-pointer '
                    >
                      {t('localeSwitcher')}
                    </Link>
                  </MenuItem>
                </MenuItems>
              </>
            )}
          </Menu>

          <a
            href='#contact'
            className=' bg-gray-50 text-brand py-3 px-7 pr-6 font-bold ltr:ml-4 rtl:mr-4 rounded bg-linear-to-bl from-white to-zinc-300 flex  transition items-center group hover:scale-105 duration-300'
          >
            {t('cta')}
            <FaChevronRight className='ltr:ml-2 rtl:mr-2 h-3 w-2 transition duration-300 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180' />
          </a>
        </div>

        <button
          onClick={() => setMobileNavOpen(true)}
          className='lg:hidden text-white'
          aria-label='Toggle navigation'
        >
          <HiOutlineMenuAlt3 size={28} />
        </button>

        <Transition show={mobileNavOpen} as={Fragment}>
          <Dialog
            as='div'
            onClose={setMobileNavOpen}
            className='relative z-50 lg:hidden'
          >
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
            </TransitionChild>

            <TransitionChild
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-200 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <DialogPanel className='fixed inset-y-0 right-0 w-3/4 max-w-sm bg-brand shadow-lg'>
                <div className='flex ltr:justify-end items-center'>
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    className='mr-2 mt-4 cursor-pointer'
                  >
                    <IoIosClose className='h-14 w-14' />
                  </button>
                </div>
                <nav className='flex flex-col space-y-4 divide-y divide-zinc-700'>
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-xl capitalize transition-colors duration-100 hover:bg-white hover:text-brand ltr:pl-8 rtl:pr-8 py-8 m-0 font-semibold flex items-center gap-2'
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {item.icon} {item.name}
                    </a>
                  ))}
                </nav>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </div>
    </header>
  );
};

export default Header;

const Logo = () => (
  <svg
    className='fill-white scale-105'
    xmlns='http://www.w3.org/2000/svg'
    width='181.18'
    height='46'
  >
    <path d='M70.18 26.36V13.63h3.52c.03.26.07.47.07.68 0 5.7-.02 11.4 0 17.09 0 .78-.2 1.02-.99 1.02-2.54 0-2.51 0-4.12-1.95-2.97-3.59-5.99-7.14-8.98-10.71-.17-.2-.3-.44-.44-.66-.07.06-.14.11-.21.17v12.98h-3.59v-2.74c0-5.04.01-10.09-.01-15.13 0-.65.19-.78.82-.85 1.97-.21 3.41.26 4.68 2.03 2.04 2.85 4.44 5.44 6.69 8.14.78.93 1.58 1.83 2.38 2.75.06-.03.11-.05.17-.08ZM130.33 18.97c-1.16-1.32-2.56-2.16-4.24-2.51-5.2-1.06-8.91 2.09-8.95 6.77-.04 3.75 2.5 6.05 5.89 6.33 2.23.18 4.39-.11 6.5-.86.58-.21.9-.48.84-1.17-.07-.75-.02-1.51-.02-2.36-1.63 0-3.18-.02-4.73.01-.62.01-.9-.14-.85-.82.06-.7.01-1.41.01-2.14.28-.03.46-.07.65-.07 2.59 0 5.18.01 7.77 0 .57 0 .78.19.78.76-.01 2.18.02 4.36-.01 6.55 0 .26-.23.61-.45.76-2.12 1.42-4.48 2.15-7.01 2.45-2.37.28-4.68.14-6.93-.64-3.87-1.34-6.4-4.54-6.4-8.97 0-5.51 4.14-9.23 8.96-9.83 2.99-.37 5.82.01 8.42 1.55.71.42 1.31 1.05 1.94 1.6.37.33.31.67-.07.96-.68.53-1.37 1.06-2.11 1.62ZM94.9 18.42c-1.25-.58-2.42-1.31-3.7-1.69-2.01-.6-4.07-.72-6.05.25-.68.33-1.15.83-1.14 1.64.01.8.53 1.29 1.2 1.48 1.64.45 3.33.74 4.97 1.22 1.63.47 3.3.94 4.82 1.68 2.87 1.39 2.75 5.33 1.01 7.25-1.21 1.34-2.73 2.07-4.46 2.35-4.04.65-7.86.05-11.32-2.28-.2-.13-.38-.29-.59-.46.51-.98.99-1.91 1.45-2.79 1.42.68 2.72 1.42 4.1 1.95 1.97.76 4.03.89 6.09.35.34-.09.67-.22.98-.4.75-.44 1.25-1.06 1.21-1.98-.04-.9-.58-1.51-1.38-1.74-1.24-.36-2.53-.57-3.8-.85-1.59-.34-3.2-.61-4.77-1.05-1.63-.46-2.94-1.4-3.19-3.23-.29-2.15.11-4.07 2.05-5.41 1.96-1.35 4.18-1.68 6.46-1.6 2.45.09 4.77.73 6.88 2.06.44.28.56.5.31.97-.42.79-.79 1.6-1.13 2.28ZM159.06 32.28h-3.59c-.01-.28-.04-.54-.04-.8 0-2.15-.02-4.31 0-6.46 0-.62-.19-.79-.8-.78-3.24.03-6.49.03-9.73 0-.64 0-.86.17-.85.83.04 2.15 0 4.31.03 6.46 0 .6-.15.83-.78.79-.92-.05-1.84-.01-2.83-.01v-3.82c.01-4.61.02-9.21.04-13.82 0-1.16.04-1.16 1.24-1.16.55 0 1.09.06 1.63.03.59-.04.76.22.75.76-.01 1.96 0 3.93 0 5.89v.87h11.25v-7.37h3.65v18.6ZM174.37 32.25h-3.67V16.83h-1.88c-1.42 0-2.84-.02-4.25 0-.49 0-.72-.13-.67-.65.03-.32.01-.65.02-.98.03-1.61.03-1.61 1.61-1.62l14.56-.09h1.09c0 1.03.03 2-.03 2.97-.01.15-.45.39-.69.4-1.61.02-3.22-.02-4.83-.03-1.25 0-1.25 0-1.25 1.21v14.2ZM48.76 32.29h-3.11c-.44 0-.53-.21-.53-.61 0-5.78 0-11.56-.03-17.34 0-.64.22-.88.86-.83.68.05 1.37.06 2.04.01.67-.05.82.23.82.85-.03 3.57-.01 7.14-.01 10.72v6.63c0 .16-.02.32-.04.58ZM106.88 13.65v18.66c-1.1 0-2.13.03-3.15-.03-.15 0-.4-.44-.4-.68-.01-3.65.02-7.31.02-10.96 0-1.96-.06-3.93-.08-5.89 0-1.09 0-1.09 1.13-1.09h2.48ZM39.12 23.04v11.15c0 .32-.05.54-.36.72-6.17 3.61-12.34 7.23-18.49 10.87-.51.3-.89.29-1.4-.02-6.05-3.6-12.11-7.18-18.19-10.74-.48-.28-.65-.59-.65-1.14 0-7.3-.01-14.6-.03-21.9 0-.4.13-.64.47-.84C6.72 7.47 12.97 3.8 19.21.12c.33-.2.56-.13.85.04 5.78 3.41 11.56 6.81 17.34 10.21.43.25.86.52 1.3.74.35.17.45.4.45.78-.01 3.72 0 7.43 0 11.15h-.03Zm-.76.07v-10.7c0-.29.01-.54-.33-.74C32.06 8.19 26.09 4.7 20.13 1.2c-.36-.21-.63-.26-1-.04-1.54.92-3.1 1.81-4.64 2.71-4.43 2.59-8.86 5.2-13.31 7.78-.32.19-.36.42-.36.72C.8 19.45.79 26.53.76 33.61c0 .42.12.67.49.89 2.41 1.4 4.82 2.82 7.22 4.23 3.54 2.08 7.07 4.16 10.6 6.25.36.21.64.23 1.01 0 1.59-.95 3.19-1.86 4.79-2.79 4.34-2.54 8.67-5.08 13.01-7.61.37-.22.49-.46.48-.88-.02-3.53 0-7.06 0-10.59Z' />
    <path d='M37.36 23.08v10.03c0 .34-.07.57-.4.77-5.42 3.17-10.85 6.33-16.24 9.56-.86.52-1.44.5-2.31-.02-4.09-2.48-8.23-4.88-12.36-7.3a293.4 293.4 0 0 0-3.83-2.23c-.3-.17-.4-.38-.4-.71V13c0-.47.27-.65.59-.84 2.53-1.49 5.07-2.97 7.6-4.46 2.96-1.74 5.93-3.47 8.87-5.25.54-.33.92-.29 1.44.02 5.07 3.01 10.15 5.99 15.23 8.98.6.35 1.4.61 1.72 1.15.3.51.1 1.32.1 2.01v8.48h-.02Zm-25.53 1.3H5.87c-.74 0-.77-.04-.77-.79 0-2.77 0-5.55-.01-8.32 0-.4.11-.64.47-.84 1.73-.99 3.45-2 5.18-3 2.81-1.64 5.61-3.29 8.43-4.91.2-.11.55-.15.74-.05 1.47.81 2.92 1.66 4.38 2.5.31.18.42.4.42.76-.02 1.37.01 2.74-.02 4.1 0 .24-.19.55-.39.7-.41.31-.89.52-1.33.79-.14.09-.33.25-.34.38-.04.66-.02 1.32-.02 2.01h7.33c.13 0 .27-.1.38-.18.35-.24.67-.21.94.09.25.28.24.62-.01.91-.27.3-.59.3-.95.1-.21-.12-.46-.22-.7-.22-2.14-.02-4.29 0-6.43 0h-.57v2.19q0 .8-.79.81h-2.97c-.03.15-.05.22-.05.29 0 2.44-.01 4.88 0 7.32 0 .2.16.44.32.59.66.59 1.37 1.12 2.03 1.72.19.17.33.49.35.74.05.76 0 1.52.02 2.27.02.53-.22.68-.7.66-.55-.02-1.11-.03-1.66 0-.5.03-.89-.13-1.25-.46-.51-.46-1.04-.89-1.59-1.3-.22-.16-.52-.28-.79-.29-.96-.03-1.92-.01-2.88-.02-.69 0-.75-.07-.75-.77v-2.21H9.54c-.02.12-.05.21-.05.29 0 1.22-.02 2.44.01 3.66 0 .2.21.46.4.57 3.15 1.86 6.31 3.7 9.48 5.53.14.08.41.11.54.04 1.6-.92 3.2-1.85 4.78-2.8.14-.09.28-.31.29-.47.03-1.29.04-2.59.03-3.88 0-.19-.12-.42-.26-.56-.52-.54-.53-1.12-.02-1.65.13-.13.23-.33.25-.5.04-.66.02-1.33.05-1.99.02-.41-.12-.56-.54-.55-.83.02-1.66 0-2.5.01-.75 0-.76 0-.76-.78 0-.79.03-1.59-.01-2.38-.03-.57.18-.73.74-.71.99.04 1.99.01 3.05.01 0-.83.02-1.61 0-2.38-.02-.52.14-.71.69-.7 2.35.03 4.7.01 7.04 0 .2 0 .39-.02.59-.03V15.4h-.64c-1.57 0-3.14-.02-4.71.01-.57.01-.73-.18-.73-.73.03-2.2 0-4.4.03-6.6 0-.43-.13-.67-.5-.88-2.23-1.27-4.46-2.56-6.67-3.87-.37-.22-.62-.23-.99-.01-5.35 3.14-10.72 6.27-16.08 9.39-.35.2-.42.44-.42.8 0 6.36 0 12.72-.02 19.08 0 .47.14.73.54.96 5.37 3.12 10.72 6.26 16.08 9.41.32.19.55.17.86 0 1.3-.78 2.61-1.54 3.91-2.31 4.05-2.37 8.1-4.74 12.16-7.11.29-.17.47-.33.47-.72-.01-6.45 0-12.9 0-19.36 0-.35-.08-.57-.4-.76-2.28-1.3-4.54-2.63-6.8-3.95-.42-.25-.85-.49-1.35-.78v6.69H33.44c.38 0 .66.06.66.53v5.71c0 .36-.17.49-.52.48-.33-.01-.67 0-1 0H26.2c-.17 0-.49.15-.49.25-.04.69-.02 1.39-.02 2.13 1.35 0 2.64 0 3.93-.01.14 0 .3-.17.42-.29.42-.44 1.07-.55 1.41-.1.32.42.69.42 1.11.41.28 0 .56.02.83 0 .52-.05.71.14.71.68-.02 2.42-.03 4.84 0 7.26.01.63-.18.99-.74 1.31-4.46 2.58-8.91 5.19-13.35 7.81-.33.19-.54.1-.8-.06-1.9-1.11-3.79-2.22-5.69-3.33-2.63-1.54-5.26-3.09-7.9-4.62-.38-.22-.53-.49-.52-.93.03-1.59 0-3.18.01-4.77 0-.77.02-.79.76-.79h5.38c.2 0 .39-.02.59-.03v-1.93Zm3.21-2.96c-.22-.01-.42-.03-.62-.03-1.65 0-3.29-.02-4.94.01-.54 0-.77-.14-.76-.71.02-1.46.02-2.92 0-4.38 0-.5.2-.67.7-.67 1.61.02 3.22.01 4.82 0 .22 0 .43-.02.68-.03 0-.52.02-.98 0-1.43-.02-.38.12-.62.46-.8.85-.45 1.69-.91 2.51-1.41.27-.17.5-.45.66-.73.24-.44.56-.68 1.06-.66.5.02.83.27 1 .74.16.46.04.87-.34 1.13-.29.2-.35.42-.34.74.01 1.48-.01 2.96.02 4.44.01.53-.15.72-.69.71-2.03-.03-4.07 0-6.1 0h-.61v2.37c.88 0 1.73.02 2.57 0 .46-.01.62.15.61.61-.02 1.68-.03 3.36 0 5.05.01.55-.18.68-.7.68-2.85-.02-5.69 0-8.54 0h-.65v4.88c0 .1.05.24.12.28.9.53 1.81 1.05 2.8 1.62 0-1.4.01-2.67 0-3.94 0-.48.15-.65.64-.64 1.89.02 3.77 0 5.66 0 .11 0 .25-.04.33.02.14.09.24.23.35.35-.12.1-.24.26-.37.29-.25.05-.51.02-.77.02h-1.96v2.32c.9 0 1.77.04 2.63-.01.67-.04 1.21.12 1.7.6.43.43.93.79 1.4 1.17.12.1.28.23.42.23.66.02 1.32.01 2.04.01 0-.67.03-1.27-.02-1.88-.02-.26-.16-.57-.35-.73-.65-.58-1.35-1.09-2-1.66-.18-.16-.33-.45-.34-.69-.03-2.64 0-5.29-.03-7.93 0-.53.18-.67.68-.65 1.01.03 2.02.01 3.02.01.04-.12.07-.17.07-.22.01-1.2.03-2.4.04-3.6.02-2.24-.26-1.66 1.56-2.72.05-.03.12-.04.14-.08.12-.2.33-.4.33-.61.04-1.11 0-2.22.03-3.33 0-.34-.12-.53-.41-.7-1.18-.66-2.35-1.33-3.51-2.02-.33-.2-.59-.2-.92 0-4.26 2.49-8.52 4.97-12.79 7.44-.37.21-.5.44-.5.87.02 2.38.01 4.77.01 7.15v.8c.23.01.41.03.59.03 1.81 0 3.62.02 5.43.02.69 0 .73.03.73.71v1.85h2.44v-4.89Zm18.32 3.03c-.75.1-1.45-.23-2.02.46-.3.37-.84.22-1.25-.1-.22-.17-.53-.33-.8-.33-2.23-.03-4.47-.01-6.71-.01h-.61v2.48h8.51c.39 0 .57.12.56.54-.02 1 0 2-.02 2.99 0 .18-.08.42-.21.52-.41.32-.84.6-1.3.85-.11.06-.32-.04-.48-.07.04-.17.02-.39.12-.48.26-.23.59-.38.87-.59.14-.1.32-.26.33-.39.03-.86.02-1.73.02-2.62h-4.68c0 .82-.02 1.59.01 2.36.01.24.15.51.31.69.37.42.52 1.01.12 1.34-.52.42-.44.92-.44 1.44v2.66c0 .13.03.27.05.45 2.48-1.45 4.91-2.85 7.31-4.29.16-.1.27-.42.27-.64.02-1.99.01-3.99.01-5.99v-1.25Zm-21.54-3.76c0-.83.02-1.58 0-2.34-.02-.53.17-.7.7-.7 2.01.03 4.03 0 6.04 0h.7c0-1.64.01-3.21 0-4.77 0-.35-.46-.52-.79-.34-.78.42-1.54.87-2.33 1.27-.36.19-.51.42-.47.83.04.37 0 .74 0 1.11.02.43-.12.65-.6.63-.55-.03-1.11 0-1.66 0H9.5v4.3h2.33Z' />
  </svg>
);
