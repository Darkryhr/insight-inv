import Image from 'next/image';

const clients = [
  { name: 'Apple', logo: '/clients/client1.png' },
  { name: 'Google', logo: '/clients/client2.png' },
  { name: 'Amazon', logo: '/clients/client3.png' },
  { name: 'Meta', logo: '/clients/client4.png' },
  { name: 'Netflix', logo: '/clients/client5.png' },
];

const ClientCarousel = () => {
  return (
    <div className='relative overflow-hidden py-6 group w-full'>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand to-transparent z-10' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand to-transparent z-10' />
      <div dir='ltr'>
        <div className='flex animate-scroll group-hover:[animation-play-state:paused]'>
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className='md:p-4 p-1 opacity-70 hover:opacity-100 transition-opacity duration-200 flex-shrink-0 w-[20%] flex justify-center items-center'
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={140}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
