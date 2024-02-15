import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import {notFound} from "next/navigation";

export default async function About() {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();

  return (
    <div className={'page-container'}>
      <div className={'flex flex-col max-w-prose'}>
        <div
          className={'markdown-container markdown-about'}
          dangerouslySetInnerHTML={{__html: md.render(data.content)}}>
        </div>
      </div>
    </div>
  )
}

const fetchData = async () => {
  const res = await StrapiClient.getInstance().getAboutPageAsync();

  if (!res) notFound();

  return res;
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getAboutPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
