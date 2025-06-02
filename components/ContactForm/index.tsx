import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { t } = useTranslation('contact');

  async function sendTestEmail() {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'recipient@example.com',
        subject: 'Hello from Next.js',
        text: 'This is a test email sent from a Next.js API route.',
      }),
    });

    const data = await res.json();
    console.log(data);
  }

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className=''>
      <h2 className='font-bold text-4xl'>{t('form.formHeading')}</h2>
      <p className='mt-8'>{t('form.formDescription')}</p>
      <form className='mx-auto mt-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-50 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            {...register('name')}
          />
          <label
            htmlFor='name'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            {t('form.nameInputLabel')}
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-50 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            {...register('email')}
          />
          <label
            htmlFor='email'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            {t('form.emailInputLabel')}
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='number'
            id='phonenumber'
            name='phonenumber'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-50 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            {...register('phone')}
          />
          <label
            htmlFor='phonenumber'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            {t('form.phoneInputLabel')}
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            name='message'
            id='message'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-50 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            rows={5}
            {...register('message')}
          ></textarea>
          <label
            htmlFor='message'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            {t('form.messageInputLabel')}
          </label>
        </div>
        <button
          type='submit'
          className='bg-gray-50 text-brand py-2 px-6 font-semibold mt-8 cursor-pointer rounded'
        >
          {t('form.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
