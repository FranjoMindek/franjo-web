import StrapiClient from "@/lib/strapi/StrapiClient";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import { notFound } from "next/navigation";

const AboutPage = async () => {
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
};

const fetchData = async () => {
  const res = await StrapiClient.getInstance().getAboutPageAsync();

  if (!res) notFound();

  return res;
}

export default AboutPage;