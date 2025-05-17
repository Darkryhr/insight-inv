import { LuGlobe } from 'react-icons/lu';

import ExperienceCard from '@/components/ExperienceCard';

const ExperienceSection = () => {
  return (
    <section className='px-4 py-12 max-w-7xl mx-auto relative'>
      <h2 className='font-bold text-4xl'>Experience</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10  mt-20'>
        <ExperienceCard
          icon={<LuGlobe size={58} />}
          title={'Name'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, illo obcaecati. Aperiam, perspiciatis ipsa nam autem consequatur maxime saepe aliquid.'
          }
        ></ExperienceCard>
        <ExperienceCard
          icon={<LuGlobe size={58} />}
          title={'Name'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, illo obcaecati. Aperiam, perspiciatis ipsa nam autem consequatur maxime saepe aliquid.'
          }
        ></ExperienceCard>
        <ExperienceCard
          icon={<LuGlobe size={58} />}
          title={'Name'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, illo obcaecati. Aperiam, perspiciatis ipsa nam autem consequatur maxime saepe aliquid.'
          }
        ></ExperienceCard>
      </div>
    </section>
  );
};

export default ExperienceSection;
