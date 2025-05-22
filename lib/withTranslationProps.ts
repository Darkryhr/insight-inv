import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export function withTranslationProps(namespaces: string[]): GetStaticProps {
  return async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'he', namespaces)),
      },
    };
  };
}
