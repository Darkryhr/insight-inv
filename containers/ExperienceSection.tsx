import { useTranslation } from 'next-i18next';
import { LuGlobe } from 'react-icons/lu';

import ExperienceCard from '@/components/ExperienceCard';

const ExperienceSection = () => {
  const { t } = useTranslation('common');

  return (
    <section
      className='px-8 pt-10 pb-16 max-w-7xl mx-auto relative scroll-mt-20'
      id='experience'
    >
      <h3 className='font-bold text-3xl'>Experience</h3>
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
