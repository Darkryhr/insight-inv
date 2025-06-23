import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  className = '',
  id,
  data_section = '',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it's in view
    threshold: 0.2, // Trigger when 50% of the section is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      className={className}
      id={id}
      data-section={data_section}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
