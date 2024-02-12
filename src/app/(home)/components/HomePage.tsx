import StrapiClient from "@/lib/strapi/StrapiClient";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import { notFound } from "next/navigation";

const HomePage = async () => {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();
  console.log(data)

  return (
    <div className={'page-container justify-center'}>
      <div className={'flex flex-col max-w-prose gap-2'}>
        <span className={'text-5xl'}>Hello world,</span>
        <span className={'text-3xl'}>my name is Franjo Mindek.</span>
        <div
          className={'markdown-container markdown-home'}
          dangerouslySetInnerHTML={{__html: md.render(data.content)}}>
        </div>
      </div>
    </div>
  )
};


const fetchData = async () => {
  const res = await StrapiClient.getInstance().getHomePageAsync();

  if (!res) notFound();

  return res;
}


export default HomePage;
