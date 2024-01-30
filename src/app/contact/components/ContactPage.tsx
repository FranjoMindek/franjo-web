'use client'

import {FormEvent} from "react";
import {useRouter} from "next/navigation";

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
    <div className={'page-container'}>
      <div className={'responsive-container flex flex-col items-center'}>
        <div className={'contained-container'}>
          <form onSubmit={onSubmit}>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <input type="body" name="body"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ContactPage;
