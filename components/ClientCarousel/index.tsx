import React from 'react';

const clients = [
  { name: 'Apple', logo: '/logos/apple.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
  { name: 'Meta', logo: '/logos/meta.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  { name: 'Apple', logo: '/logos/apple.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
  { name: 'Meta', logo: '/logos/meta.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  // add as many as you need
];

const ClientCarousel = () => {
  return (
    <div className='relative overflow-hidden py-16 bg-zinc-600 group'>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-600 to-transparent z-10' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-600 to-transparent z-10' />
      <div className='whitespace-nowrap flex items-center gap-8 animate-scroll group-hover:[animation-play-state:paused]'>
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className='inline-block'>
            <h3 className='opacity-80 hover:opacity-100 transition-opacity duration-300'>
              {client.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
