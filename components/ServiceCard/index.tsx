const ServiceCard = ({ title, description, icon, paragraph = '' }) => {
  return (
    <div className='bg-brand-lighter drop-shadow-2xl p-6 relative rounded-lg flex flex-col space-y-2'>
      <div className='mb-3'>{icon}</div>
      <h4 className='text-lg font-semibold'>{title}</h4>
      <p className='text-sm opacity-70'>{description}</p>
    </div>
  );
};

export default ServiceCard;
