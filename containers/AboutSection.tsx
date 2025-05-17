import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='px-4 py-12 max-w-7xl mx-auto relative'>
      <h2 className='font-bold text-4xl'>About us</h2>
      <div className='flex overflow-hidden'>
        <div className='flex mt-8 space-x-4'>
          <div className='h-0.5 bg-zinc-50 w-lg mt-2 hidden'></div>
          <p className='text-sm/7'>
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
    </section>
  );
};

export default AboutSection;
