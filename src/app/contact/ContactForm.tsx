'use client'

import {FormEvent} from 'react';
import {useRouter} from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      // TODO implement toast or smth
      console.log(await res.text());
      return;
    }

    router.push('/thank-you');
  };

  return (
    <form onSubmit={onSubmit} className={'flex flex-col gap-4 w-full items-center'}>
      <div className={'form-input-container'}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' placeholder='Your full name'/>
      </div>
      <div className={'form-input-container'}>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='Your email'/>
      </div>
      <div className={'form-input-container'}>
        <label htmlFor='message'>Message:</label>
        <textarea rows={6} id='message' name='message' placeholder='Your message'/>
      </div>
      <button type='submit' className={'w-fit p-2 border-2 border-coffee rounded-xl hover:bg-coffee hover:text-offwhite transition-colors'}>Submit</button>
    </form>
  )
};
