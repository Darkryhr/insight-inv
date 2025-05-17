import { FaBalanceScale } from 'react-icons/fa';

import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  return (
    <section className='px-4 py-12 max-w-7xl mx-auto relative'>
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
