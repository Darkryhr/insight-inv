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
      {/* Hero section */}
      <HeroSection />
      {/* About section */}
      <AboutSection />
      {/* Experience section */}
      <ExperienceSection />
      {/* Client carousel */}
      {/* Services section */}
      <ServicesSection />
      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
