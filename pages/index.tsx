import Head from 'next/head';
import Script from 'next/script';

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
  'header',
  'hero',
  'about',
  'experience',
  'services',
  'faq',
  'contact',
  'footer',
  'accessibility',
  'terms',
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
        <meta name='apple-mobile-web-app-title' content='Insight' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Insight | Investigations & Intelligence'
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
      <Script
        src='https://website-widgets.pages.dev/dist/sienna.min.js'
        defer
      ></Script>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ClientCarousel />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
