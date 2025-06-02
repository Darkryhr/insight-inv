import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import QuestionRow from '@/components/QuestionRow';

const FAQSection = () => {
  const { t } = useTranslation('faq');

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: t('answer5'),
    },
    {
      question: t('question6'),
      answer: t('answer6'),
    },
    {
      question: t('question7'),
      answer: t('answer7'),
    },
    {
      question: t('question8'),
      answer: t('answer8'),
    },
    {
      question: t('question9'),
      answer: t('answer9'),
    },
  ];

  return (
    <section
      className='px-8 py-24 max-w-7xl mx-auto'
      id='faq'
      data-section='fAQ'
    >
      <h2 className='font-bold text-4xl'>{t('heading')}</h2>
      {faqs.map((faq, index) => (
        <QuestionRow
          question={faq.question}
          answer={faq.answer}
          index={index}
          key={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </section>
  );
};

export default FAQSection;
