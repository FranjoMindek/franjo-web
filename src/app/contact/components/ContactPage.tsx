'use client'

import {FormEvent} from 'react';
import {useRouter} from 'next/navigation';

const ContactPage = () => {
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
    <div className={'page-container justify-center'}>
      <div className={'w-full max-w-prose flex flex-col gap-8 '}>
        <h1 className={'text-6xl'}>Contact</h1>
        <p>
          If you are interested in contacting me, you can use the form below.
        </p>
        <form onSubmit={onSubmit} className={'flex flex-col gap-4 w-full items-center'}>
          <div className={'form-input-container'}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' placeholder='Your name here...'/>
          </div>
          <div className={'form-input-container'}>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' placeholder='Your email here...'/>
          </div>
          <div className={'form-input-container'}>
            <label htmlFor='message'>Message:</label>
            <textarea rows={6} id='message' name='message' placeholder='Your message here...'/>
          </div>
          <button type='submit' className={'w-fit p-2 border-2 border-coffee rounded-xl hover:bg-coffee hover:text-offwhite transition-colors'}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default ContactPage;
