const HeroSection = () => {
  return (
    <section
      className='px-6 py-12 max-w-7xl mx-auto h-screen scroll-mt-24'
      id='hero'
    >
      <div className='bg-[url(/hero.jpg)] bg-cover w-full h-full absolute -z-10 left-0 top-0'></div>
      <div className='flex flex-col md:flex-row justify-center h-full pb-30 items-center md:gap-12'>
        <h1 className='font-bold text-6xl md:text-8xl text-end md:flex-1'>
          Bespoke investigators
        </h1>
        <div className='md:flex-1'>
          <p className='mt-8 font-light w-3/4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            suscipit expedita praesentium, repellendus animi fuga aut modi
            tempore asperiores eveniet?
          </p>
          <button className='bg-gray-50 text-brand py-3 px-8 font-semibold mt-8 rounded cursor-pointer'>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
