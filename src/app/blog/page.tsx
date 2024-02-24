import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";
import {notFound} from "next/navigation";
import BlogPostPreview from "@/app/blog/BlogPostPreview";
import BlogPostHeadline from "@/app/blog/BlogPostHeadline";

export default async function Blog() {
  const data = await fetchData();
  const headline = data[0];
  const previews = data.slice(1);

  return (
    <div className={'page-container justify-start'}>
      <div className={'w-full max-w-prose flex flex-col gap-12 sm:gap-16'}>
        <p className={'text-5xl sm:text-6xl font-bold'}>Blog</p>
        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12'}>
          <BlogPostHeadline preview={headline}/>
          {previews.length > 0 && data.map(preview => (
            <BlogPostPreview key={preview.id} preview={preview}/>
          ))}
        </div>
      </div>
    </div>
  )
}

async function fetchData() {
  const res = await StrapiClient.getInstance().getBlogPostPreviewsAsync();
  if (!res) notFound();

  return res;
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getBlogPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
