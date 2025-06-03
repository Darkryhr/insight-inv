import Head from 'next/head';

import ClientCarousel from '@/components/ClientCarousel';
import {
  AboutSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  ServicesSection,
} from '@/containers';
import ContactSection from '@/containers/ContactSection';
import { withTranslationProps } from '@/lib/withTranslationProps';

export const getStaticProps = withTranslationProps([
  'common',
  'header',
  'hero',
  'about',
  'experience',
  'services',
  'faq',
  'contact',
  'footer',
]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Insight | Investigations & Intelligence</title>
        <meta
          name='description'
          content='High quality, fast, and discreet PI services.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://insight-inv.co.il/' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Your Client’s Brand | What They Do'
        />
        <meta
          property='og:description'
          content='High quality, fast, and discreet PI services.'
        />
        <meta
          property='og:image'
          content='https://insight-inv.co.il/og-image.png'
        />
        <meta property='og:url' content='https://insight-inv.co.il' />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Insight | Investigations & Intelligence'
        />
        <meta
          name='twitter:description'
          content='Insight | Investigations & Intelligence'
        />
        <meta
          name='twitter:image'
          content='https://insight-inv.co.il/og-image.png'
        />
      </Head>
      <div className=''>
        <HeroSection />
        <div className='relative overflow-x-clip'>
          <span className='absolute font-black text-9xl opacity-5 -z-10 top-0'>
            About
          </span>
          <AboutSection />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='absolute font-black text-9xl opacity-5 -z-1 top-10 left-1/4'>
            Experience
          </span>
          <ExperienceSection />
        </div>
        <div className='flex justify-center bg-brand-lighter'>
          <ClientCarousel />
        </div>
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
        <div className='relative overflow-x-clip'>
          <span className='absolute font-black text-9xl opacity-5 -z-10 top-0 left-0 '>
            Contact
          </span>
          <ContactSection />
        </div>
      </div>
    </>
  );
}
