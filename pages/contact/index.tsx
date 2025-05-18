import ContactForm from '@/components/ContactForm';
import OfficeMap from '@/components/ContactForm/OfficeMap';
import React from 'react';
import {
  MdOutlineHome,
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
} from 'react-icons/md';

const Contact = () => {
  return (
    <section className='px-8 py-12 max-w-7xl mx-auto relative scroll-mt-20'>
      <div className='bg-brand-lighter rounded-lg py-14 px-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ContactForm />
        <div className=''>
          <div className='flex flex-col space-y-4 mb-8 mt-4 md:mt-0'>
            <ContactInfo
              title='Address'
              info='blah-blah 15, 21351'
              icon={<MdOutlineHome size={22} />}
            />
            <ContactInfo
              title='Phone'
              info='055 555 5555'
              icon={<MdOutlineLocalPhone size={18} />}
            />
            <ContactInfo
              title='Email'
              info='wireframe@mail.com'
              icon={<MdOutlineMailOutline size={18} />}
            />
          </div>
          <OfficeMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactInfo = ({ title, info, icon }) => {
  return (
    <div className='bg-zinc-800 text-sm flex px-3 py-4 rounded-lg items-center'>
      <div className='text-brand bg-zinc-100 rounded-full flex items-center justify-center w-8 h-8 mr-3'>
        {icon}
      </div>
      <div className=''>
        <h6 className='font-semibold'>{title}</h6>
        <p className='font-light text-zinc-300'>{info}</p>
      </div>
    </div>
  );
};
