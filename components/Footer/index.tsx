import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black w-full px-8 sm:px-6 lg:px-8 pt-12'>
      <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-auto gap-10'>
        <div className=''>
          <h1>Logo</h1>
        </div>
        <div className=''>
          <h4 className='font-semibold'>Sitemap</h4>
          <ul>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>About us</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>our services</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>FAQ</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h4 className='font-semibold'>Contact info</h4>
          <ul>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>T:555-5555</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>E:ssdfgn@mail.com</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>A:dsgsdg, 15</Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h4 className='font-semibold'>Legal</h4>
          <ul>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>Privacy Policy</Link>
            </li>
            <li className='opacity-50 font-light text-sm'>
              <Link href={'/'}>Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className='flex w-full items-start justify-start lg:justify-end'>
          <SocialButtons />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-10'>
        <div className='h-[1px] bg-zinc-700 w-full my-10'></div>
        <p className='font-light text-xs opacity-50'>
          ©2025 Insight All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const SocialButtons = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Link href={''}>
        <button className='cursor-pointer p-2 rounded-lg border border-zinc-700'>
          <FaInstagram size={14} />
        </button>
      </Link>
      <Link href={''}>
        <button className='cursor-pointer p-2 rounded-lg border border-zinc-700'>
          <FaFacebook size={14} />
        </button>
      </Link>
      <Link href={''}>
        <button className='cursor-pointer p-2 rounded-lg border border-zinc-700'>
          <FaTiktok size={14} />
        </button>
      </Link>
      <Link href={''}>
        <button className='cursor-pointer p-2 rounded-lg border border-zinc-700'>
          <FaLinkedin size={14} />
        </button>
      </Link>
    </div>
  );
};
