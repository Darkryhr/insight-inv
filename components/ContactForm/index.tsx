import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

function escapeHTML(str = '') {
  return str.replace(
    /[&<>"']/g,
    c =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[c])
  );
}

const contactFormSchema = z.object({
  name: z
    .string({ required_error: 'A name is required' })
    .min(2, 'Name is too short'),
  email: z
    .string({ required_error: 'An email is required' })
    .email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const { t } = useTranslation('contact');

  const submitMail: SubmitHandler<ContactFormData> = async inputs => {
    const sanitizedInputs = {
      name: escapeHTML(inputs.name),
      email: escapeHTML(inputs.email),
      phone: escapeHTML(inputs.phone),
      message: escapeHTML(inputs.message),
    };

    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${sanitizedInputs.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${sanitizedInputs.email}">${sanitizedInputs.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${sanitizedInputs.phone}">${sanitizedInputs.phone}</a></p>
        <p><strong>Message:</strong></p>
        <div style="border-left: 4px solid #ccc; padding-left: 1em; color: #555;">
          <p style="white-space: pre-line;">${sanitizedInputs.message}</p>
        </div>
      </div>
    `;

    const text = `
Name: ${sanitizedInputs.name}
Email: ${sanitizedInputs.email}
Phone: ${sanitizedInputs.phone}
Message:
${sanitizedInputs.message}
    `;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'office@insight-inv.co.il',
          subject: 'פנייה חדשה מהאתר',
          text,
          html,
        }),
      });

      const result = await response.json();
      console.log('✅ Email sent:', result.message);

      toast.custom(toastInstance => (
        <div
          className={`${
            toastInstance.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-brand shadow-lg rounded pointer-events-auto flex py-4`}
        >
          <div className='flex-1 w-0 p-4 flex items-center justify-center flex-col'>
            <p className='text-sm font-medium text-zinc-50'>
              {t('form.formToastHeading')}
            </p>
            <p className='mt-1 text-sm text-zinc-300'>
              {t('form.formToastSubheading')}
            </p>
          </div>
        </div>
      ));

      reset();
    } catch (err) {
      console.error('❌ Email error:', err);
      toast.error('Failed to send message.');
    }
  };

  console.log(errors);
  return (
    <div className=''>
      <h2 className='font-bold text-4xl'>{t('form.formHeading')}</h2>
      <p className='mt-8'>{t('form.formDescription')}</p>
      <form className='mx-auto mt-8' onSubmit={handleSubmit(submitMail)}>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-50 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            {...register('name')}
          />

          {errors.name && (
            <span className='text-red-500 text-sm absolute pt-1'>
              {errors.name.message}
            </span>
          )}

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
          {errors.email && (
            <span className='text-red-500 text-sm absolute pt-1'>
              {errors.email.message}
            </span>
          )}

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
