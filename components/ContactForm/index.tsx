const ContactForm = () => {
  return (
    <div className=''>
      <h2 className='font-bold text-4xl'>Contact us</h2>
      <p className='mt-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora
        totam numquam, pariatur esse architecto!
      </p>
      <form className='mx-auto mt-8'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
          />
          <label
            htmlFor='name'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
          />
          <label
            htmlFor='email'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            E-mail
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='number'
            id='phonenumber'
            name='phonenumber'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
          />
          <label
            htmlFor='phonenumber'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Phone number
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            name='message'
            id='message'
            placeholder=' '
            className='block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-400 peer text-sm'
            rows={5}
          ></textarea>
          <label
            htmlFor='message'
            className='text-zinc-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Message
          </label>
        </div>
        <button
          type='submit'
          className='bg-gray-50 text-brand py-2 px-6 font-semibold mt-8 cursor-pointer rounded'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
