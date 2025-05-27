import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props: any) {
  const locale = props.__NEXT_DATA__.locale || 'en';

  return (
    <Html lang={locale} className='no-scrollbar'>
      <Head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='Insight' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <body className='antialiased scroll-smooth font-display '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
