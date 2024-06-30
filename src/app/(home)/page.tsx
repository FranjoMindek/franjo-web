import StrapiClient from '@/lib/strapi/StrapiClient';
import StrapiMapper from '@/lib/strapi/models/StrapiMapper';
import HomePageVM from '@/models/HomePageVM';
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import { notFound } from 'next/navigation';

export default async function Home() {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();

  return (
    <div className='page-container'>
      <div className='flex max-w-prose flex-col gap-6 sm:gap-8'>
        <p className='flex flex-col text-3xl sm:text-4xl'>
          <span className='text-4xl font-semibold sm:text-5xl'>Hello,</span>
          <span>
            my name is <span className='font-semibold'>Franjo Mindek.</span>
          </span>
        </p>
        <div
          className='markdown-container'
          dangerouslySetInnerHTML={{ __html: md.render(data.content) }}
        ></div>
      </div>
    </div>
  );
}

async function fetchData(): Promise<HomePageVM> {
  const res = await StrapiClient.getInstance().getHomePageAsync();
  if (!res) notFound();

  return res;
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getHomePageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
