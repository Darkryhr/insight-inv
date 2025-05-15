const HeroSection = () => {
  return (
    <section className='px-6 py-12 max-w-7xl mx-auto h-screen'>
      <div className='bg-[url(/hero.jpg)] bg-cover w-full h-full absolute -z-10 left-0 top-0'></div>
      <div className='flex flex-col justify-center h-full pb-30 items-start'>
        <h1 className='font-bold text-7xl'>Bespoke investigators</h1>
        <p className='mt-8 font-light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          suscipit expedita praesentium, repellendus animi fuga aut modi tempore
          asperiores eveniet?
        </p>
        <button className='bg-gray-50 text-brand py-3 px-8 font-semibold mt-8'>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
