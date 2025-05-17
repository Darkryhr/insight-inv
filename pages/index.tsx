import {
  AboutSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  ServicesSection,
} from '@/containers';

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <div className='relative overflow-x-clip'>
        <span className='absolute font-black text-9xl opacity-5 -z-10 top-0'>
          About
        </span>
      </div>
      <AboutSection />
      <div className='relative overflow-x-clip'>
        <span className='absolute font-black text-9xl opacity-5 -z-1 top-10 left-1/4'>
          Experience
        </span>
      </div>
      <ExperienceSection />
      {/* Client carousel */}
      <div className='relative overflow-x-clip'>
        <span className='absolute font-black text-9xl opacity-5 -z-10 top-0 -end-1/12 '>
          Services
        </span>
        <ServicesSection />
      </div>
      <div className='relative overflow-x-clip'>
        <span className='absolute font-black text-9xl opacity-5 -z-10 top-0 left-0 '>
          FAQ
        </span>
        <FAQSection />
      </div>
    </div>
  );
}
