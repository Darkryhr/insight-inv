import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { Fragment } from 'react';
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

const QuestionRow = ({ question, answer, index, openIndex, setOpenIndex }) => {
  return (
    <div className='mt-8'>
      <Disclosure as='div' className='w-full ' defaultOpen={false}>
        {({ open }) => (
          <>
            <DisclosureButton
              className='border-b pb-3 text-left cursor-pointer flex justify-between w-full font-semibold'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {question}
              {openIndex === index ? (
                <MdOutlineRemoveCircleOutline size={24} />
              ) : (
                <MdAddCircleOutline size={24} />
              )}
            </DisclosureButton>
            <div className='overflow-hidden py-2 transition-all'>
              <AnimatePresence>
                {openIndex === index && (
                  <DisclosurePanel static as={Fragment}>
                    <motion.div
                      initial={{ opacity: 0, y: -24 }}
                      animate={{ opacity: 0.5, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className='origin-bottom opacity-50'
                    >
                      {answer}
                    </motion.div>
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default QuestionRow;
