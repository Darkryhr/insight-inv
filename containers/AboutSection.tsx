import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BsArrowDown } from 'react-icons/bs';

const AboutSection = () => {
  const { t } = useTranslation('common');

  return (
    <section
      className='px-8 py-28 max-w-7xl mx-auto relative scroll-mt-20'
      id='about'
      data-section='about'
    >
      <h2 className='font-bold text-4xl'>About us</h2>
      <div className='flex overflow-hidden'>
        <div className='flex mt-8 space-x-4'>
          <div className='h-0.5 bg-zinc-50 w-56 mt-2 hidden md:block'></div>
          <p className='text-md/7'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur esse repudiandae odit natus rem aperiam voluptatibus sit
            molestiae. Quaerat consequuntur ullam minima ex perferendis
            reiciendis saepe porro, tempora sint soluta voluptates, praesentium
            commodi corporis officiis? Tempore accusamus aspernatur veritatis
            ipsam.
          </p>
        </div>
        <div className='w-[250px] h-[300px] translate-x-4 shrink-0 mt-8'>
          <Image src='/Fingerprint.svg' fill alt='fingerprint' />
        </div>
      </div>

      <a
        href='#experience'
        className='w-fit group border-2 border-gray-50 text-white py-4 px-6 font-semibold mt-8 rounded cursor-pointer flex relative transition-colors'
      >
        <BsArrowDown className='absolute left-1/2 transform -translate-x-1/2 -bottom-10 h-10 w-10 transition-transform duration-300 ease-in-out group-hover:translate-y-2' />
        See our experience
      </a>
    </section>
  );
};

export default AboutSection;
