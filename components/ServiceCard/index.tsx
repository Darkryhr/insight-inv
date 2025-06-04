import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';

const ServiceCard = ({ title, description, icon, paragraph = '' }) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className='bg-brand-lighter  drop-shadow-2xl p-6 relative rounded-lg flex flex-col text-right space-y-2 cursor-pointer hover:bg-brand hover:text-white duration-300 ease-in-out hover:scale-105 transition-all active:scale-95'
        onClick={open}
      >
        <div className='mb-3'>{icon}</div>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='text-sm opacity-70'>{description}</p>
      </button>
      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={close}
      >
        <DialogBackdrop className='fixed inset-0 bg-black/50 ' />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              onClick={close}
              transition
              className='w-full max-w-xl rounded-xl bg-black/5 md:p-10 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0
              '
            >
              <DialogTitle
                as='h3'
                className='md:text-4xl/7 text-2xl/7 font-bold text-white'
              >
                {title}
              </DialogTitle>
              <p className='mt-6 text-white/50 md:text-lg/6 text-base/6 whitespace-pre-line'>
                {paragraph}
              </p>
              {/* <div className='mt-4'>
                <Button
                  className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ServiceCard;
