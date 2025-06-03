import { useTranslation } from 'next-i18next';
import { FaShieldAlt } from 'react-icons/fa';
import { IoEyeOffOutline } from 'react-icons/io5';
import { LuGlobe } from 'react-icons/lu';
import { TbTie } from 'react-icons/tb';

import ExperienceCard from '@/components/ExperienceCard';

const ExperienceSection = () => {
  const { t } = useTranslation('experience');

  const experienceData = [
    {
      title: t('dependability.title'),
      description: t('dependability.description'),
      icon: <FaShieldAlt size={58} />,
    },
    {
      title: t('professionalism.title'),
      description: t('professionalism.description'),
      icon: <TbTie size={58} />,
    },
    {
      title: t('discretion.title'),
      description: t('discretion.description'),
      icon: <IoEyeOffOutline size={58} />,
    },
  ];

  return (
    <section
      className='px-8 pt-10 pb-16 max-w-7xl mx-auto relative scroll-mt-20'
      id='experience'
    >
      <h3 className='font-bold text-3xl'>{t('heading')}</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 mt-20'>
        {experienceData.map((item, index) => (
          <ExperienceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
