import StrapiClient from '@/lib/strapi/StrapiClient';
import StrapiMapper from '@/lib/strapi/models/StrapiMapper';

export default async function Home() {
  return (
    <div className='page-container'>
      <div className='flex max-w-prose flex-col gap-6 sm:gap-8'>
        <p className='text-3xl sm:text-4xl'>
          <span>
            Hello, my name is
            <strong className='font-semibold'> Franjo Mindek.</strong>
          </span>
        </p>
        <p className='text-2xl'>
          I&apos;m a passionate
          <strong className='font-semibold'> Software Engineer </strong>
          curious about anything and everything development-related.
        </p>
        <p className='text-2xl'>
          I love research-focused coding and learning how things work under the
          hood, no matter how complicated.
        </p>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getHomePageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
