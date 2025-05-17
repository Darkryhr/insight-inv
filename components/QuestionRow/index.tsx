import { useState } from 'react';
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

const QuestionRow = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='mt-8'>
      <div className='flex justify-between w-full'>
        <h5 className='font-semibold'>{question}</h5>
        <button className='cursor-pointer z-10' onClick={() => setOpen(!open)}>
          {open ? (
            <MdOutlineRemoveCircleOutline size={24} />
          ) : (
            <MdAddCircleOutline size={24} />
          )}
        </button>
      </div>
      <div
        className={`mt-4 transition-transform -z-10 duration-400
        ${open ? 'translate-y-0' : '-translate-y-10'}
        `}
      >
        <p
          className={`mt-4 transition-transform ${
            open ? 'visible' : 'invisible'
          }`}
        >
          {answer}
        </p>
        <div className='h-[1px] bg-white mt-4'></div>
      </div>
    </div>
  );
};

export default QuestionRow;

// ${open ? 'block translate-none' : 'hidden -translate-y-6'}
