import { withTranslationProps } from '@/lib/withTranslationProps';
import { useTranslation } from 'next-i18next';

export const getStaticProps = withTranslationProps([
  'header',
  'footer',
  'terms',
]);

const TermsOfUse = () => {
  const { t } = useTranslation('terms');

  return (
    <section className='px-8 max-w-7xl mx-auto pb-24 pt-8'>
      <h2 className='font-bold text-4xl'>{t('heading')}</h2>

      <p className='whitespace-pre-line mt-8'>{t('terms')}</p>
    </section>
  );
};

export default TermsOfUse;
