import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import {notFound} from "next/navigation";

export default async function Home() {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();

  return (
    <div className={'page-container'}>
      <div className={'flex flex-col max-w-prose gap-8'}>
        <p className={'sm:text-5xl text-4xl flex flex-col gap-2'}>
          <p className={'font-semibold sm:text-6xl text-5xl'}>Hello,</p>
          <span>my name is <span className={'font-semibold'}>Franjo Mindek.</span></span>
        </p>
        <div
          className={'markdown-container markdown-home'}
          dangerouslySetInnerHTML={{__html: md.render(data.content)}}>
        </div>
      </div>
    </div>
  )
}

const fetchData = async () => {
  const res = await StrapiClient.getInstance().getHomePageAsync();
  if (!res) notFound();

  return res;
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getHomePageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
