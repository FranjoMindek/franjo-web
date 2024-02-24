import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";
import {notFound} from "next/navigation";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import Image from "next/image";
import {toLocalDate} from "@/utils/date-utils";

type Props = {
  params: {
    slug: string
  },
}

export default async function BlogPost({ params }: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData(params.slug);

  return (
    <div className={'page-container justify-start'}>
      <div className={'w-full max-w-prose flex flex-col'}>
        <h1 className={'text-5xl sm:text-6xl font-bold mb-12 sm:mb-16'}>{data.title}</h1>
        <p>{data.description}</p>
        <Image
          width={data.cover.width}
          height={data.cover.height}
          src={data.cover.url}
          alt={data.cover.alternativeText ?? 'Blog post cover'}
          className={'w-full h-auto object-cover aspect-video mt-8 mb-4'}/>
        <div className={'flex flex-row justify-between  mb-8'}>
          <span>Franjo Mindek</span>
          <span>{toLocalDate(data.published)}</span>
        </div>
        <div
          className={'markdown-container'}
          dangerouslySetInnerHTML={{__html: md.render(data.content)}}>
        </div>
      </div>
    </div>
  )
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
  }))
}

export async function generateMetadata({ params }: Props) {
  const seo = (await StrapiClient.getInstance().getBlogPostAsync(params.slug))!.seo;

  return StrapiMapper.toMetadata(seo);
}
