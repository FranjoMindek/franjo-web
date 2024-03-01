import { Metadata } from 'next';

export default function ThankYou() {
  return (
    <div className='page-container gap-8 text-center'>
      <p className='text-3xl md:text-5xl'>Thank you for contacting!</p>
      <p className='text-xl md:text-3xl'>
        I&apos;ll try to respond in short notice.
      </p>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
    },
  };
}
