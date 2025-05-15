import ExperienceCard from '@/components/ExperienceCard';
const ExperienceSection = () => {
  return (
    <section className='px-4 py-12 max-w-7xl mx-auto'>
      <span>Experience</span>
      <h2>Experience</h2>
      <div className=''>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
      </div>
    </section>
  );
};

export default ExperienceSection;
