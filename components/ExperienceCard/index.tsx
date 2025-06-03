const ExperienceCard = ({ title, description, icon }) => {
  return (
    <div className='bg-brand-lighter drop-shadow-2xl px-8 pb-6 pt-14 relative rounded-lg'>
      <div className='absolute -top-8'>{icon}</div>
      <h3 className='font-semibold text-2xl'>{title}</h3>
      <p className='mt-4 font-light opacity-80 tracking-wide'>{description}</p>
    </div>
  );
};

export default ExperienceCard;
