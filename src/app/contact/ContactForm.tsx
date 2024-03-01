'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState<boolean>(false);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      // TODO implement toast or smth
      console.log(await res.text());
      setIsPending(false);
      return;
    }

    setIsPending(false);
    router.push('/thank-you');
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full flex-col items-center gap-4'
    >
      <div className='form-input-container'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' placeholder='Your full name' />
      </div>
      <div className='form-input-container'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='Your email' />
      </div>
      <div className='form-input-container'>
        <label htmlFor='message'>Message:</label>
        <textarea
          rows={6}
          id='message'
          name='message'
          placeholder='Your message'
        />
      </div>
      <button
        type='submit'
        disabled={isPending}
        className='w-fit rounded-xl border-2 border-coffee p-2  transition-colors disabled:cursor-not-allowed disabled:bg-coffee disabled:text-offwhite'
      >
        {isPending ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
