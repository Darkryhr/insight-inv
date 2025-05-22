import { useTranslation } from 'next-i18next';
import { FaBalanceScale } from 'react-icons/fa';

import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation('common');

  return (
    <section
      className='px-8 py-24 max-w-7xl mx-auto relative scroll-mt-20'
      id='services'
      data-section='services'
    >
      <h2 className='font-bold text-4xl'>Our services</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
        <ServiceCard
          title={'Heading'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
          icon={<FaBalanceScale size={24} />}
        ></ServiceCard>
      </div>
    </section>
  );
};

export default ServicesSection;
