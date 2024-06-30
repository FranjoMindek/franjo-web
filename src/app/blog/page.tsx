import StrapiClient from '@/lib/strapi/StrapiClient';
import StrapiMapper from '@/lib/strapi/models/StrapiMapper';
import { notFound } from 'next/navigation';
import BlogPostPreview from '@/app/blog/BlogPostPreview';
import BlogPostHeadline from '@/app/blog/BlogPostHeadline';
import BlogPostPreviewVM from '@/models/BlogPostPreviewVM';

export default async function Blog() {
  const data = await fetchData();
  const headline = data[0];
  const previews = data.slice(1);

  return (
    <div className='page-container justify-start'>
      <div className='flex w-full max-w-prose flex-col gap-12 sm:gap-16'>
        <p className='text-5xl font-bold sm:text-6xl'>Blog</p>
        <div className='grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2'>
          <BlogPostHeadline preview={headline} />
          {previews.length > 0 &&
            data.map(preview => (
              <BlogPostPreview key={preview.id} preview={preview} />
            ))}
        </div>
      </div>
    </div>
  );
}

async function fetchData(): Promise<BlogPostPreviewVM[]> {
  const res = await StrapiClient.getInstance().getBlogPostPreviewsAsync();
  if (!res) notFound();

  return res;
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getBlogPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
