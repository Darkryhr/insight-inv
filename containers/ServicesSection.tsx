import ScrollAnimation from '@/components/ScrollAnimation';
import { useTranslation } from 'next-i18next';
import { BsIncognito } from 'react-icons/bs';
import { FaRegCreditCard, FaRegIdBadge } from 'react-icons/fa';
import { IoTerminalOutline } from 'react-icons/io5';
import { LuBinoculars, LuMapPin, LuPuzzle } from 'react-icons/lu';

import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation('services');

  const services = [
    {
      name: t('service_tracking_surveillance.name'),
      description: t('service_tracking_surveillance.description'),
      paragraph: t('service_tracking_surveillance.paragraph'),
      icon: <LuBinoculars size={24} />,
    },
    {
      name: t('service_undercover_investigations.name'),
      description: t('service_undercover_investigations.description'),
      paragraph: t('service_undercover_investigations.paragraph'),
      icon: <BsIncognito size={24} />,
    },
    {
      name: t('service_financial_investigations.name'),
      description: t('service_financial_investigations.description'),
      paragraph: t('service_financial_investigations.paragraph'),
      icon: <FaRegCreditCard size={24} />,
    },
    {
      name: t('service_cyber_and_information_investigations.name'),
      description: t(
        'service_cyber_and_information_investigations.description'
      ),
      paragraph: t('service_cyber_and_information_investigations.paragraph'),
      icon: <IoTerminalOutline size={24} />,
    },
    {
      name: t('service_locating.name'),
      description: t('service_locating.description'),
      paragraph: t('service_locating.paragraph'),
      icon: <LuMapPin size={24} />,
    },
    {
      name: t('service_background_checks.name'),
      description: t('service_background_checks.description'),
      paragraph: t('service_background_checks.paragraph'),
      icon: <FaRegIdBadge size={24} />,
    },
    {
      name: t('service_complex_investigations.name'),
      description: t('service_complex_investigations.description'),
      paragraph: t('service_complex_investigations.paragraph'),
      icon: <LuPuzzle size={24} />,
    },
  ];

  return (
    <ScrollAnimation
      className='px-8 py-24 max-w-7xl mx-auto relative scroll-mt-20'
      id='services'
      data_section='services'
    >
      <h2 className='font-bold text-4xl'>{t('heading')}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.name}
            description={service.description}
            paragraph={service.paragraph}
            icon={service.icon}
          />
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ServicesSection;
