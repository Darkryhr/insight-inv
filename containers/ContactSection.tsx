import { useTranslation } from 'next-i18next';
import React from 'react';
import {
  MdOutlineHome,
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
} from 'react-icons/md';

import ContactForm from '@/components/ContactForm';
import OfficeMap from '@/components/ContactForm/OfficeMap';

const ContactSection = () => {
  const { t } = useTranslation('contact');

  const contactInfo = [
    {
      heading: t('emailHeading'),
      info: t('email'),
      href: 'mailto:office@insight-inv.co.il',
      icon: <MdOutlineMailOutline size={18} />,
    },
    {
      heading: t('phoneNumberHeading'),
      info: t('phoneNumber'),
      href: 'tel:+972548022001',
      icon: <MdOutlineLocalPhone size={18} />,
    },
    {
      heading: t('addressHeading'),
      info: t('addressValue'),
      href: 'https://maps.app.goo.gl/w8Py8SitJ42A3uga8',
      icon: <MdOutlineHome size={22} />,
    },
  ];

  return (
    <section
      className='px-8 py-12 max-w-7xl mx-auto relative scroll-mt-20'
      id='contact'
      data-section='contact'
    >
      <div className='bg-brand-lighter rounded-lg py-14 px-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ContactForm />
        <div className=''>
          <div className='flex flex-col space-y-4 mb-8 mt-4 md:mt-0'>
            {contactInfo.map((item, index) => (
              <ContactInfo
                title={item.heading}
                info={item.info}
                href={item.href}
                key={index}
                icon={item.icon}
              />
            ))}
          </div>
          <OfficeMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const ContactInfo = ({ title, info, href, icon }) => {
  return (
    <a
      className='bg-zinc-800 text-sm flex px-3 py-4 rounded-lg items-center hover:bg-zinc-700 transition-all duration-300 ease-in-out'
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      <div className='text-brand bg-zinc-100 rounded-full flex items-center justify-center w-8 h-8 ltr:mr-3 rtl:ml-3'>
        {icon}
      </div>
      <div className=''>
        <h6 className='font-semibold'>{title}</h6>
        <p className='font-light text-zinc-300'>{info}</p>
      </div>
    </a>
  );
};
