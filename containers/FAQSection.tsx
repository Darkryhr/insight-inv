import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import QuestionRow from '@/components/QuestionRow';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days...',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship worldwide.',
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Only before it has been shipped.',
  },
];

const FAQSection = () => {
  const { t } = useTranslation('common');

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className='px-8 py-24 max-w-7xl mx-auto'
      id='faq'
      data-section='fAQ'
    >
      <h2 className='font-bold text-4xl'>FAQ</h2>
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
