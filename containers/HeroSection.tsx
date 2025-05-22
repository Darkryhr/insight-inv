import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');

  return (
    <section
      className='px-6 py-12 max-w-7xl mx-auto h-screen scroll-mt-24'
      id='hero'
      data-section='home'
    >
      <div className='bg-[url(/hero.jpg)] bg-cover w-full h-full absolute -z-10 left-0 top-0'></div>
      <div className='flex flex-col md:flex-row justify-center h-full pb-40 px-12 items-center md:gap-12'>
        <h1 className='font-bold text-6xl md:text-8xl text-end md:flex-1 pb-2 mt-3 bg-linear-to-bl from-white to-zinc-400 inline-block text-transparent bg-clip-text'>
          Bespoke investigators
        </h1>
        <div className='md:flex-1 pb-2'>
          <p className='mt-8 font-light'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            suscipit expedita praesentium, repellendus animi fuga aut modi
            tempore asperiores eveniet?
          </p>
          <button className='bg-linear-to-bl from-white to-zinc-300 text-brand py-3 px-8 font-bold mt-8 rounded cursor-pointer'>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
