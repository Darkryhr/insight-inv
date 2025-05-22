import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
    localeDetection: false,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
