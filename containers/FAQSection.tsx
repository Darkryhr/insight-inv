import QuestionRow from '@/components/QuestionRow';

const FAQSection = () => {
  return (
    <section className='px-4 py-12 max-w-7xl mx-auto'>
      <h2 className='font-bold text-4xl'>FAQ</h2>
      <QuestionRow question={'Question'} answer={'Answer'}></QuestionRow>
    </section>
  );
};

export default FAQSection;
