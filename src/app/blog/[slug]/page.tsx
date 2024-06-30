import StrapiClient from '@/lib/strapi/StrapiClient';
import StrapiMapper from '@/lib/strapi/models/StrapiMapper';
import { toLocalDate } from '@/utils/date';
import Back from '@img/back.svg';
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData(params.slug);

  return (
    <div className='page-container justify-start'>
      <div className='flex w-full max-w-prose flex-col'>
        <Link className='mb-12 flex flex-row items-center gap-2' href='/blog'>
          <Back />
          Return to blog
        </Link>
        <h1 className='mb-12 text-5xl font-bold sm:mb-16 sm:text-6xl'>
          {data.title}
        </h1>
        <p>{data.description}</p>
        <Image
          width={data.cover.width}
          height={data.cover.height}
          src={data.cover.url}
          alt={data.cover.alternativeText ?? 'Blog post cover'}
          className='mb-4 mt-8 aspect-video h-auto w-full object-cover'
        />
        <div className='mb-8 flex flex-row  justify-between'>
          <span>Franjo Mindek</span>
          <span>{toLocalDate(data.published)}</span>
        </div>
        <div
          className='markdown-container'
          dangerouslySetInnerHTML={{ __html: md.render(data.content) }}
        ></div>
      </div>
    </div>
  );
}

async function fetchData(slug: string) {
  const res = await StrapiClient.getInstance().getBlogPostAsync(slug);
  if (!res) notFound();

  return res;
}

export async function generateStaticParams() {
  const res = await StrapiClient.getInstance().getBlogPostSlugsAsync();

  return res.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const seo = (await StrapiClient.getInstance().getBlogPostAsync(params.slug))!
    .seo;

  return StrapiMapper.toMetadata(seo);
}
