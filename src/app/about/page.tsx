import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import {notFound} from "next/navigation";
import EducationSection from "@/app/about/EducationSection";
import WorkSection from "@/app/about/WorkSection";

export default async function About() {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();

  return (
    <div className={'page-container'}>
      <div className={'flex flex-col gap-16 max-w-prose'}>
        {/* About */}
        <div className={'flex flex-col gap-8'}>
          <h1 className={'sm:text-6xl text-5xl font-bold'}>About</h1>
          <div
            className={'markdown-container'}
            dangerouslySetInnerHTML={{__html: md.render(data.introduction)}}>
          </div>
        </div>
        {/* Education */}
        <div>
          <h2 className={'sm:text-5xl text-4xl font-bold pb-2 border-b-4'}>Education</h2>
          {data.educationSections.length && data.educationSections.map(education => (
            <EducationSection educationSection={education} key={education.certificate}/>
          ))}
        </div>
        {/* Work */}
        <div>
          <h2 className={'sm:text-5xl text-4xl font-bold pb-2 border-b-4'}>Work</h2>
          {data.workSections.length && data.workSections.map(work => (
            <WorkSection workSection={work} key={work.company}/>
          ))}
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
