import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('footer');
  const router = useRouter();

  const { locale, asPath } = router;
  const changeTo = locale === 'he' ? 'en' : 'he';

  const sitemap = [
    { name: t('sitemap.home'), href: '#hero' },
    { name: t('sitemap.about'), href: '#about' },
    { name: t('sitemap.services'), href: '#services' },
    { name: t('sitemap.faq'), href: '#faq' },
    { name: t('sitemap.contact'), href: '#contact' },
  ];

  const contactInfo = [
    { name: t('contactInfo.email'), href: 'mailto:office@insight-inv.co.il' },
    { name: t('contactInfo.phone'), href: 'tel:+972548022001' },
    {
      name: t('contactInfo.address'),
      href: 'https://maps.app.goo.gl/w8Py8SitJ42A3uga8',
    },
  ];

  const legal = [];

  return (
    <footer className='bg-black w-full px-8 sm:px-6 lg:px-8 pt-12'>
      <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-auto gap-10'>
        <div className=''>
          <Logo />
        </div>
        <div className='md:mx-auto'>
          <h4 className='font-semibold'>{t('sitemap.heading')}</h4>
          <ul className='flex flex-col space-y-1 mt-2'>
            {sitemap.map(navlink =>
              navlink.href !== '/contact' ? (
                <li
                  className='opacity-50 font-light transition-opacity duration-100 hover:opacity-100'
                  key={navlink.href}
                >
                  <a href={navlink.href}>{navlink.name}</a>
                </li>
              ) : (
                <li
                  className='opacity-50 font-light transition-opacity duration-100 hover:opacity-100'
                  key={navlink.href}
                >
                  <Link href={navlink.href} locale={changeTo}>
                    {navlink.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className='md:mx-auto'>
          <h4 className='font-semibold'>{t('contactInfo.heading')}</h4>

          <ul className='flex flex-col space-y-1 mt-2'>
            {contactInfo.map(contactLink => (
              <li
                className='opacity-50 font-light transition-opacity duration-100 hover:opacity-100'
                key={contactLink.href}
              >
                <a href={contactLink.href} rel='noreferrer' target='_blank'>
                  {contactLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:mx-auto'>
          <h4 className='font-semibold'>{t('legal.heading')}</h4>
          <ul className='flex flex-col space-y-1 mt-2'>
            <li className='opacity-50 font-light transition-opacity duration-100 hover:opacity-100'>
              <Link href={'/accessibility'}>
                {t('legal.accessibilityStatement')}
              </Link>
            </li>
            <li className='opacity-50 font-light transition-opacity duration-100 hover:opacity-100'>
              <Link href={'/tou'}>{t('legal.termsOfUse')}</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full items-start justify-start lg:justify-end'>
          <SocialButtons />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-10'>
        <div className='h-[1px] bg-zinc-700 w-full my-10'></div>
        <p className='font-light text-xs opacity-50'>©2025 {t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;

const SocialButtons = () => {
  return (
    <ul className='grid grid-cols-2 gap-4'>
      <li>
        <a
          href='https://www.instagram.com/insight_inv/'
          rel='noreferrer'
          target='_blank'
        >
          <button className='cursor-pointer p-2 rounded-lg border border-zinc-700 hover:bg-white hover:text-black transition-colors'>
            <FaInstagram size={14} />
          </button>
        </a>
      </li>
      <li>
        <a
          href='https://www.facebook.com/MagenInv'
          rel='noreferrer'
          target='_blank'
        >
          <button className='cursor-pointer p-2 rounded-lg border border-zinc-700 hover:bg-white hover:text-black transition-colors'>
            <FaFacebook size={14} />
          </button>
        </a>
      </li>
      {/* <li>
        <a href={''}>
          <button className='cursor-pointer p-2 rounded-lg border border-zinc-700 hover:bg-white hover:text-black transition-colors'>
            <FaTiktok size={14} />
          </button>
        </a>
      </li> */}
    </ul>
  );
};

const Logo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='182.82'
    height='62'
    className='fill-white'
  >
    <path d='M81.44 28.52V16.89h3.22c.02.24.06.43.06.62 0 5.2-.02 10.41 0 15.61 0 .71-.18.93-.9.93-2.32 0-2.29 0-3.76-1.78-2.71-3.28-5.47-6.52-8.2-9.78-.15-.18-.27-.4-.4-.61-.06.05-.13.1-.19.15v11.85h-3.28v-2.5c0-4.61.01-9.22-.01-13.82 0-.59.17-.71.75-.77 1.8-.19 3.12.24 4.27 1.85 1.87 2.6 4.05 4.97 6.11 7.43.71.85 1.45 1.67 2.17 2.51.05-.02.1-.05.15-.07ZM136.38 21.77c-1.06-1.21-2.34-1.98-3.88-2.29-4.75-.97-8.13 1.91-8.18 6.19-.03 3.43 2.28 5.53 5.38 5.78 2.04.17 4.01-.1 5.94-.79.53-.19.82-.44.76-1.07-.06-.68-.01-1.38-.01-2.15-1.49 0-2.9-.02-4.32.01-.57.01-.83-.13-.78-.75.05-.64.01-1.28.01-1.95.25-.03.42-.06.59-.06 2.37 0 4.73.01 7.1 0 .52 0 .71.18.71.69-.01 1.99.02 3.99-.01 5.98 0 .24-.21.56-.42.7-1.94 1.3-4.09 1.96-6.4 2.24-2.17.26-4.27.12-6.33-.59-3.54-1.22-5.84-4.15-5.84-8.2 0-5.03 3.78-8.43 8.18-8.97 2.73-.34 5.31 0 7.69 1.42.65.39 1.2.96 1.78 1.47.34.3.28.61-.06.87-.62.49-1.25.97-1.92 1.48ZM104.02 21.27c-1.14-.53-2.21-1.19-3.38-1.54-1.83-.55-3.72-.66-5.53.23-.62.31-1.05.76-1.04 1.49.01.73.48 1.18 1.1 1.35 1.5.41 3.04.68 4.54 1.11 1.49.43 3.01.86 4.4 1.53 2.62 1.27 2.51 4.87.92 6.63-1.1 1.22-2.5 1.89-4.07 2.15-3.69.6-7.18.04-10.34-2.09-.18-.12-.34-.27-.54-.42.47-.9.91-1.75 1.32-2.55 1.3.62 2.49 1.29 3.74 1.78 1.8.69 3.68.81 5.57.32.31-.08.62-.21.89-.37.69-.4 1.14-.97 1.1-1.81-.04-.82-.53-1.38-1.26-1.59-1.14-.33-2.31-.52-3.47-.77-1.45-.31-2.93-.55-4.35-.96-1.49-.42-2.68-1.28-2.91-2.95-.27-1.96.1-3.72 1.87-4.94 1.79-1.23 3.82-1.54 5.9-1.46 2.24.08 4.36.67 6.29 1.88.4.25.51.46.28.88-.39.72-.73 1.46-1.03 2.09ZM162.62 33.93h-3.28c-.01-.26-.03-.5-.03-.73 0-1.97-.02-3.94 0-5.9 0-.56-.17-.72-.73-.72-2.96.03-5.93.03-8.89 0-.59 0-.78.15-.77.75.03 1.97 0 3.94.03 5.9 0 .55-.14.76-.71.72-.84-.05-1.68-.01-2.59-.01v-3.49c.01-4.21.01-8.42.04-12.63 0-1.06.04-1.06 1.13-1.06.5 0 1 .05 1.49.02.54-.03.69.2.69.7-.01 1.79 0 3.59 0 5.38v.79h10.28v-6.73h3.33v16.99ZM176.6 33.9h-3.35V19.82h-1.72c-1.3 0-2.59-.02-3.89 0-.44 0-.66-.12-.61-.59.03-.3.01-.6.02-.9.03-1.47.03-1.47 1.47-1.48 4.43-.03 8.87-.06 13.3-.08h1c0 .94.03 1.83-.03 2.71 0 .14-.41.36-.63.36-1.47.02-2.94-.02-4.41-.02-1.14 0-1.14 0-1.14 1.11V33.9ZM61.87 33.94h-2.84c-.4 0-.49-.2-.49-.56 0-5.28 0-10.56-.03-15.84 0-.59.2-.81.79-.76.62.05 1.25.06 1.87.01.61-.04.75.21.75.78-.02 3.26-.01 6.53 0 9.79v6.05c0 .14-.02.29-.03.53ZM114.96 16.91v17.04c-1.01 0-1.95.03-2.88-.03-.14 0-.36-.4-.36-.62-.01-3.34.02-6.68.01-10.01 0-1.79-.05-3.59-.07-5.38 0-.99 0-1 1.03-1h2.26ZM60.47 39.97c.59-.23.89-.01 1.13.46a26.63 26.63 0 0 0 1.78 3.06v-3.5c.63-.19.92-.13.91.56-.03 1.69-.01 3.38-.01 5.06-.53.25-.84.14-1.07-.33-.43-.87-.89-1.72-1.34-2.57-.11-.2-.23-.39-.51-.54v3.51h-.88v-5.7ZM122.63 42.42c-.62-1.13-.61-1.93.03-2.4.61-.44 1.62-.37 2.05.16.48.58.27 1.26-.76 2.33.24.34.49.69.86 1.2.17-.51.28-.87.42-1.3h.85c-.29 1.1-1.08 2.2.24 3.23-.08.05-.17.11-.25.16-.42-.14-.84-.29-1.38-.47-1.08.56-2.01.56-2.55-.09-.66-.8-.52-1.56.51-2.83Zm.63.55c-.56.56-.8 1.07-.42 1.67.29.46.76.43 1.18.2.14-.08.27-.44.21-.55-.26-.44-.59-.83-.97-1.33Zm.24-1.01c.4-.39.86-.73.48-1.28-.09-.13-.64-.16-.75-.03-.4.46-.21.9.27 1.31ZM171.13 43.56v-3.6c.26-.02.47-.04.73-.06v5.75c-.54.24-.8-.01-1.02-.45-.52-1.03-1.07-2.05-1.75-3.04v3.53c-.32.02-.58.03-.89.05v-5.76c.51-.17.81-.03 1.04.43.54 1.08 1.13 2.14 1.7 3.2.06-.01.12-.03.19-.04ZM135.83 45.63c-.54.22-.8.03-1.03-.44-.52-1.06-1.09-2.1-1.8-3.12v3.6h-.74v-5.75c.59-.25.81.11 1.02.5.52 1 1.04 2 1.72 2.97V40c.6-.22.91-.17.9.51-.02 1.52 0 3.04 0 4.56 0 .19-.04.38-.06.56ZM112.69 45.84c-.27-.2-.64-.35-.8-.61-.59-1-1.1-2.04-1.79-3.05v3.44c-.54.18-.82.16-.82-.45.01-1.57-.02-3.13 0-4.7 0-.19.19-.38.29-.57.21.13.51.2.62.38.62 1.09 1.2 2.2 1.91 3.28v-3.55c.41-.12.82-.34.83.31.02 1.76 0 3.52 0 5.29-.08.08-.16.16-.23.24ZM103.86 42.77c0-.42-.02-.85 0-1.27.07-1.07.7-1.69 1.75-1.77.97-.07 1.77.46 1.89 1.48.13 1.03.15 2.09.03 3.12-.14 1.17-.77 1.51-2.19 1.41-.95-.07-1.43-.61-1.49-1.69-.02-.42 0-.85 0-1.27Zm2.89-.06c-.02-.39-.02-.86-.09-1.33-.07-.52-.42-.77-.94-.75-.5.02-.91.21-.93.76-.04.91-.04 1.83-.03 2.74 0 .62.39.87.98.86.6-.01.91-.34.94-.93.02-.42.04-.84.06-1.35ZM90.74 41.56c-.46.18-.73.14-.88-.36-.15-.51-.61-.71-1.07-.56-.32.11-.76.44-.79.71-.1.96-.13 1.94-.03 2.89.07.66.69.8 1.28.7.53-.09.77-.47.69-.98-.03-.18-.25-.34-.38-.5l-.37-.43c.15-.11.3-.3.47-.32.36-.05.74-.02 1.15-.02 0 .61.06 1.15-.01 1.68-.15 1.03-.76 1.39-2.12 1.34-.96-.03-1.5-.48-1.57-1.44-.07-.96-.1-1.94-.02-2.9.1-1.15.82-1.69 1.98-1.66 1.07.03 1.57.56 1.67 1.83ZM161.86 41.69h-.63c-.28-.37-.46-.81-.78-.99-.64-.36-1.37.09-1.45.89-.07.76-.06 1.54.01 2.31.07.82.58 1.19 1.29 1.06.64-.12.81-.49.63-1.43-.2-.04-.41-.08-.62-.12-.1-.82-.03-.85 1.54-.67 0 .67.11 1.37-.03 2.02-.17.8-1.05 1.1-2.26.95-.8-.1-1.34-.61-1.38-1.41-.04-.99-.05-1.99 0-2.99.05-1.01.91-1.66 1.98-1.59 1.12.07 1.71.74 1.69 1.96ZM75.11 44.11c.46-.09.79-.14.92.4.15.6.71.55 1.1.43.29-.09.68-.47.68-.71-.01-.31-.32-.69-.6-.89-.31-.22-.74-.26-1.1-.42-.8-.36-1.08-1.03-.87-1.99.16-.74.75-1.17 1.67-1.2.83-.03 1.5.43 1.7 1.17.03.13 0 .28 0 .47-.42.03-.76.16-.98-.41-.08-.2-.63-.34-.95-.3-.24.03-.6.36-.62.58-.02.28.18.69.42.86.33.24.78.3 1.17.45.89.34 1.16.9.99 1.98-.12.77-.66 1.21-1.53 1.21-.42 0-.86 0-1.24-.14-.63-.23-.88-.75-.76-1.47ZM179.66 42.35h1.85v.76h-1.72c-.08.11-.13.15-.13.19q-.18 1.58 1.39 1.61c.17 0 .37-.04.51.03s.3.26.31.4c0 .13-.19.37-.31.37-.94.03-1.87.02-2.84.02v-5.84c.96 0 1.87-.01 2.79.02.12 0 .33.23.33.35 0 .13-.18.35-.3.38-.34.06-.7.06-1.04.02-.75-.09-.99.25-.89.94.03.22.03.44.05.76ZM118.07 41.35c-.37.02-.72.22-.94-.37-.09-.23-.64-.36-.99-.37-.2 0-.59.36-.57.51.04.34.23.74.48.95.29.24.72.31 1.09.46.84.35 1.16.97 1 1.93-.13.77-.72 1.25-1.59 1.27-1.46.03-1.99-.39-1.98-1.59.38-.16.67-.2.84.32.19.58.73.61 1.18.48.26-.08.56-.41.64-.68.16-.52-.21-.82-.67-1-.32-.13-.66-.23-.97-.37-.8-.37-1.16-1.21-.9-2.05.24-.77 1.02-1.2 1.99-1.09.92.1 1.38.62 1.41 1.61ZM91.95 45.65c.53-1.87 1.04-3.68 1.58-5.47.04-.13.28-.27.44-.27.19 0 .53.08.57.2.58 1.83 1.11 3.67 1.66 5.51-.64.23-1.01.14-1.07-.52-.07-.76-.61-.66-1.14-.69-.55-.03-.94.1-.99.7-.05.64-.42.7-1.04.54Zm2.75-2.03c-.21-.77-.39-1.45-.57-2.12l-.19.03c-.15.68-.31 1.35-.48 2.09h1.24ZM70.76 45.68v-5.8c.96 0 1.9-.03 2.83.03.14 0 .26.38.39.59l-.15.21h-1.62c-.8 0-.54.6-.59 1.02-.06.49.15.68.64.64.39-.03.79 0 1.25 0 .02.25.04.45.07.76-.44 0-.84.04-1.22 0-.72-.09-.74.34-.74.87 0 .55 0 1.02.76.93.32-.03.65.02.97.01.54-.02.72.21.53.77h-3.11ZM145.1 42.35c.16.54.07.82-.48.76-.15-.01-.3 0-.45 0-.95 0-1.29.48-.97 1.4.05.13.27.26.43.28.42.05.84.06 1.26.06.54 0 .72.23.54.81h-3.08v-4.02q0-1.81 1.84-1.81h.6c.31 0 .74-.07.66.43-.03.16-.39.31-.63.38-.2.06-.44.02-.67.02-.89 0-1.27.54-.94 1.37.06.15.32.29.51.3.44.04.89.01 1.37.01ZM166.33 42.35c.15.57 0 .83-.56.76-.1-.01-.2 0-.3 0-1.05 0-1.34.36-1.06 1.4.04.15.29.32.46.34.47.05.95 0 1.41.06.16.02.29.28.44.43-.14.13-.28.36-.43.37-.77.04-1.54.04-2.31 0-.15 0-.42-.28-.42-.43-.03-1.64-.03-3.28 0-4.93 0-.16.3-.44.48-.45.69-.06 1.39-.06 2.09-.02.19.01.36.26.54.4-.19.13-.37.32-.58.36-.28.06-.6.05-.89.01-.69-.09-.83.22-.83.85 0 .64.17.93.85.85.36-.04.74 0 1.11 0ZM177.31 41.62c-.49.15-.82.2-.94-.45-.09-.47-.58-.67-1.01-.51-.31.12-.74.45-.77.73-.11.88-.07 1.78-.06 2.67 0 .47.23.83.73.89.5.06.9-.06 1.17-.57.12-.22.48-.3.8-.49.09 1.09-.44 1.75-1.28 1.83-1.65.16-2.36-.48-2.36-2.14 0-.7-.03-1.39.01-2.09.07-1.14.82-1.78 1.99-1.77 1.04.01 1.65.66 1.71 1.89ZM65.54 39.95c.72-.23.96.03 1.09.61.25 1.05.58 2.08 1 3.13l.87-3.22c.13-.49.37-.75.99-.44-.36 1.29-.72 2.6-1.09 3.91-.13.45-.23.92-.41 1.35-.07.18-.29.38-.48.42-.11.02-.36-.22-.41-.38-.54-1.77-1.04-3.56-1.57-5.37ZM79.67 40.6c-.18-.52-.07-.77.51-.75.87.02 1.74-.02 2.61.02.16 0 .32.25.47.38-.16.13-.3.34-.48.39-.25.07-.53.02-.94.02v2.56c0 .65.03 1.3-.02 1.94-.01.19-.24.37-.38.56-.13-.18-.38-.36-.39-.55-.04-1.19-.07-2.39 0-3.58.04-.77-.2-1.06-.96-.94-.14.02-.29-.03-.43-.04ZM138.62 40.65c-.44 0-.74.05-1.02-.02-.16-.04-.34-.24-.38-.4-.02-.09.2-.36.33-.37 1-.03 1.99-.04 2.99.01.15 0 .28.37.41.56-.16.13-.2.18-.24.19q-1.2.13-1.2 1.37c0 1-.03 1.99.01 2.99.03.64-.16.91-.89.65v-4.98ZM98.59 45.68h-.78c0-1.37-.03-2.71.01-4.05.02-.7-.1-1.11-.92-.99-.15.02-.33-.23-.5-.35.16-.14.31-.39.47-.4.87-.04 1.74-.04 2.61 0 .16 0 .31.26.47.4-.17.12-.36.37-.52.35-.73-.08-.87.26-.85.91.04 1.36.01 2.73.01 4.14ZM151.47 39.94c.63-.21.81.05.79.64-.03 1.22 0 2.44-.02 3.65 0 .5.14.75.68.69.27-.03.55 0 .82-.02.57-.06.78.16.59.77h-2.87v-5.74ZM156.44 39.93v5.74h-.9c0-1.81-.02-3.6.01-5.39.01-.66.51-.31.89-.36ZM147.08 45.72v-5.79c.23-.01.44-.02.67-.04.04.13.08.22.08.31 0 1.29.05 2.59 0 3.88-.03.69.23.89.86.83.3-.03.61-.05.89.02.15.04.37.26.37.4 0 .13-.24.37-.39.37-.79.04-1.59.02-2.47.02ZM85.37 39.96v5.72h-.86v-4.1c0-.32.03-.65 0-.97-.05-.6.18-.84.86-.64ZM130.46 45.68h-.78V39.7c.35.24.75.38.75.54.04 1.8.03 3.6.03 5.45ZM58.67 39.97v5.66c-.49.16-.85.22-.84-.51.02-1.52.02-3.04 0-4.56-.01-.59.21-.77.84-.59ZM102.12 39.94v5.71c-.49.15-.77.09-.76-.5.02-1.57.01-3.13-.01-4.7 0-.54.23-.65.77-.5ZM52.73 31.05v15.02c0 .43-.07.73-.49.97-8.32 4.87-16.63 9.75-24.93 14.65-.69.41-1.2.39-1.89-.02A5075.7 5075.7 0 0 0 .91 47.19c-.64-.38-.88-.8-.88-1.53.01-9.83 0-19.67-.03-29.51 0-.54.17-.86.64-1.14C9.06 10.07 17.48 5.12 25.89.16c.45-.26.76-.17 1.15.06 7.79 4.59 15.58 9.18 23.37 13.76.58.34 1.15.7 1.76.99.47.23.61.54.61 1.06-.02 5.01-.01 10.02-.01 15.02h-.03Zm-1.02.1V16.72c0-.39.02-.73-.44-.99-8.05-4.68-16.09-9.39-24.12-14.11-.48-.28-.84-.35-1.35-.05-2.07 1.24-4.17 2.44-6.26 3.66-5.98 3.49-11.95 7-17.94 10.48-.44.25-.48.56-.48.98-.02 9.54-.04 19.08-.09 28.63 0 .57.17.91.66 1.19 3.25 1.89 6.49 3.8 9.73 5.7 4.77 2.8 9.53 5.6 14.29 8.42.48.29.86.3 1.36 0 2.14-1.28 4.3-2.51 6.45-3.76 5.85-3.42 11.69-6.85 17.54-10.26.5-.29.66-.62.65-1.19-.02-4.76-.01-9.52-.01-14.28Z' />
    <path d='M50.36 31.1v13.52c0 .46-.09.77-.53 1.03-7.31 4.27-14.62 8.53-21.89 12.88-1.17.7-1.95.68-3.11-.03-5.51-3.35-11.1-6.57-16.66-9.84-1.72-1.01-3.43-2.02-5.16-3.01-.4-.23-.54-.51-.54-.96 0-9.07.01-18.13-.01-27.2 0-.64.37-.87.8-1.13 3.41-2 6.83-4 10.24-6.01C17.49 8 21.49 5.67 25.46 3.28c.73-.44 1.24-.4 1.94.02 6.83 4.05 13.68 8.07 20.53 12.1.81.48 1.89.83 2.31 1.55.41.69.13 1.79.13 2.7v11.43h-.03Zm-34.41 1.76h-.93c-2.37 0-4.73.01-7.1.01-.99 0-1.04-.05-1.04-1.07 0-3.74 0-7.48-.01-11.21 0-.54.15-.87.63-1.14 2.34-1.33 4.66-2.69 6.98-4.05 3.79-2.21 7.56-4.43 11.36-6.62.27-.15.75-.2 1-.06 1.99 1.09 3.94 2.24 5.91 3.37.42.24.57.54.56 1.03-.03 1.84.02 3.69-.03 5.53 0 .32-.26.74-.53.94-.55.41-1.2.7-1.8 1.07-.19.12-.45.34-.46.52-.05.88-.02 1.77-.02 2.71 3.36 0 6.62 0 9.88-.01.17 0 .36-.13.52-.24.47-.33.91-.29 1.27.12.34.38.33.84-.01 1.22-.37.41-.8.41-1.28.13-.28-.16-.63-.3-.94-.3-2.89-.02-5.78-.01-8.67-.01h-.77v2.95q0 1.08-1.06 1.09H25.4c-.04.2-.07.29-.07.39 0 3.29-.02 6.58.01 9.87 0 .27.22.6.43.79.89.79 1.85 1.52 2.73 2.32.26.23.45.66.47 1 .06 1.02-.01 2.04.03 3.06.03.72-.3.92-.95.89-.75-.03-1.5-.04-2.24 0-.67.04-1.19-.17-1.69-.62-.68-.62-1.4-1.21-2.14-1.75-.3-.22-.71-.37-1.07-.39-1.29-.05-2.59-.02-3.89-.02-.92 0-1.02-.1-1.02-1.03v-2.98h-3.16c-.03.16-.07.28-.07.4 0 1.64-.03 3.29.02 4.93 0 .26.29.62.54.76 4.25 2.51 8.51 4.99 12.78 7.46.19.11.55.15.73.05 2.16-1.23 4.31-2.49 6.45-3.77.19-.11.38-.41.38-.63.04-1.74.05-3.49.04-5.23 0-.26-.16-.56-.35-.75-.71-.73-.72-1.52-.02-2.23.17-.17.32-.45.33-.68.05-.89.02-1.79.07-2.69.03-.55-.16-.76-.72-.74-1.12.03-2.24.01-3.36.02-1.02 0-1.02 0-1.03-1.05 0-1.07.04-2.15-.02-3.21-.04-.77.25-.99.99-.96 1.34.05 2.68.01 4.11.01 0-1.12.03-2.16-.01-3.2-.03-.7.19-.96.93-.95 3.16.04 6.33.02 9.49.01.26 0 .53-.02.8-.04v-7.12h-.86c-2.12 0-4.24-.03-6.35.02-.76.02-.99-.24-.98-.99.04-2.96.01-5.93.05-8.89 0-.57-.17-.9-.67-1.19-3.01-1.72-6-3.45-8.98-5.21-.49-.29-.83-.31-1.34-.02-7.22 4.24-14.44 8.46-21.68 12.66-.47.27-.57.59-.57 1.08 0 8.57 0 17.14-.03 25.71 0 .63.19.98.73 1.3 7.23 4.21 14.45 8.44 21.67 12.68.43.25.74.23 1.15-.01 1.75-1.05 3.51-2.08 5.28-3.11 5.46-3.2 10.92-6.39 16.38-9.58.38-.22.63-.44.63-.97-.02-8.7 0-17.39 0-26.09 0-.47-.11-.77-.55-1.02-3.07-1.76-6.12-3.55-9.17-5.33-.57-.33-1.14-.67-1.81-1.06v9.02h.8c2.14 0 4.29.01 6.43 0 .51 0 .89.09.89.71v7.7c0 .49-.23.66-.7.65-.45-.02-.9 0-1.35 0-2.87 0-5.73 0-8.6.01-.23 0-.66.2-.66.33-.06.93-.03 1.87-.03 2.88 1.82 0 3.56.01 5.3-.02.19 0 .41-.23.56-.39.57-.6 1.44-.74 1.9-.13.43.57.92.56 1.49.55.37 0 .75.03 1.12 0 .71-.07.96.19.95.92-.03 3.26-.04 6.53.01 9.79.01.85-.25 1.34-.99 1.77-6.01 3.48-12.01 7-17.99 10.53-.44.26-.73.13-1.08-.08-2.55-1.5-5.11-3-7.67-4.49-3.55-2.08-7.09-4.16-10.64-6.22-.52-.3-.72-.66-.71-1.26.04-2.14.01-4.29.01-6.43 0-1.04.03-1.07 1.03-1.07h7.25c.26 0 .53-.02.79-.03v-2.61Zm4.32-4c-.3-.01-.57-.04-.83-.04-2.22 0-4.44-.03-6.65.01-.73.01-1.04-.18-1.03-.95.03-1.97.02-3.94 0-5.9 0-.68.27-.91.95-.9 2.17.03 4.33.01 6.5.01.29 0 .58-.03.92-.04 0-.69.02-1.32 0-1.93-.03-.51.17-.84.62-1.08 1.14-.61 2.28-1.22 3.39-1.9.36-.22.68-.6.89-.98.32-.59.75-.92 1.42-.89.67.03 1.12.37 1.34 1 .22.62.06 1.17-.45 1.53-.39.27-.47.57-.46 1 .02 1.99-.01 3.99.03 5.98.01.71-.2.97-.93.96-2.74-.03-5.48-.01-8.22-.01h-.82v3.2c1.19 0 2.33.03 3.47-.01.62-.02.83.2.82.82-.03 2.27-.04 4.53 0 6.8.01.75-.25.92-.95.92-3.84-.03-7.67-.01-11.51-.01h-.88v6.58c0 .13.07.32.17.38 1.21.72 2.43 1.41 3.78 2.18 0-1.89.02-3.6-.01-5.32-.01-.64.2-.87.86-.86 2.54.03 5.08.01 7.62.01.15 0 .33-.05.44.02.18.12.32.31.48.48-.17.14-.32.36-.5.39-.34.06-.69.02-1.04.02h-2.64v3.13c1.21 0 2.38.05 3.54-.02.91-.05 1.63.16 2.29.81.58.58 1.25 1.07 1.89 1.58.17.14.37.3.57.31.89.03 1.78.01 2.76.01 0-.9.05-1.72-.02-2.53-.03-.35-.21-.76-.47-.99-.87-.78-1.82-1.47-2.7-2.24-.24-.21-.45-.61-.45-.93-.03-3.56-.01-7.13-.04-10.69 0-.71.25-.9.92-.88 1.36.05 2.73.01 4.07.01.05-.16.09-.22.09-.29.02-1.62.04-3.24.05-4.86.03-3.02-.35-2.23 2.1-3.66.06-.04.16-.06.19-.11.16-.27.44-.54.45-.82.05-1.49.01-2.99.04-4.48 0-.46-.16-.72-.56-.94-1.59-.89-3.16-1.79-4.72-2.72-.44-.26-.8-.26-1.24 0-5.74 3.36-11.48 6.7-17.24 10.03-.5.29-.68.59-.67 1.17.03 3.21.02 6.43.02 9.64v1.08c.32.02.56.04.8.04l7.32.03c.93 0 .98.04.98.95v2.49h3.29v-6.59Zm24.69 4.09c-1.01.13-1.96-.31-2.72.62-.41.49-1.14.3-1.69-.13-.3-.23-.71-.44-1.08-.44-3.01-.04-6.03-.02-9.04-.02h-.83v3.34H41.07c.53 0 .76.16.75.73-.03 1.34 0 2.69-.02 4.03 0 .24-.11.57-.28.71-.55.43-1.14.81-1.75 1.14-.15.08-.43-.06-.64-.09.05-.22.03-.53.17-.65.35-.31.79-.51 1.17-.79.18-.14.43-.35.44-.53.04-1.16.02-2.33.02-3.53h-6.3c0 1.1-.03 2.14.02 3.18.02.32.2.68.42.93.5.56.71 1.36.16 1.8-.69.57-.59 1.24-.59 1.94 0 1.2 0 2.39.01 3.59 0 .18.04.36.07.61 3.34-1.95 6.61-3.85 9.86-5.78.22-.13.37-.57.37-.87.03-2.69.02-5.38.01-8.07v-1.69Zm-29.03-5.07c0-1.12.03-2.13-.01-3.15-.03-.71.23-.95.95-.94 2.71.03 5.43.01 8.14.01h.95c0-2.21.02-4.32-.01-6.43 0-.47-.61-.71-1.07-.46-1.05.57-2.08 1.17-3.14 1.72-.49.25-.69.57-.63 1.12.05.49 0 .99.01 1.49.02.58-.16.88-.81.84-.74-.04-1.49 0-2.24 0H12.8v5.8h3.14Z' />
  </svg>
);
