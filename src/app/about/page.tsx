import StrapiClient from '@/lib/strapi/StrapiClient';
import StrapiMapper from '@/lib/strapi/models/StrapiMapper';
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import { notFound } from 'next/navigation';
import EducationSection from '@/app/about/EducationSection';
import WorkSection from '@/app/about/WorkSection';

export default async function About() {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const data = await fetchData();

  return (
    <div className='page-container'>
      <div className='flex max-w-prose flex-col gap-16 sm:gap-20'>
        {/* About */}
        <div>
          <h1 className='mb-12 text-5xl font-bold sm:mb-16 sm:text-6xl'>
            About
          </h1>
          <div
            className='markdown-container'
            dangerouslySetInnerHTML={{ __html: md.render(data.introduction) }}
          ></div>
        </div>
        {/* Work */}
        <div>
          <h2 className='mb-12 border-b-4 pb-2 text-4xl font-bold sm:mb-14 sm:text-5xl'>
            Work
          </h2>
          {data.workSections.length &&
            data.workSections.map(work => (
              <WorkSection workSection={work} key={work.company} />
            ))}
        </div>
        {/* Education */}
        <div>
          <h2 className='mb-12 border-b-4 pb-2 text-4xl font-bold sm:mb-14 sm:text-5xl'>
            Education
          </h2>
          {data.educationSections.length &&
            data.educationSections.map(education => (
              <EducationSection
                educationSection={education}
                key={education.certificate}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

const fetchData = async () => {
  const res = await StrapiClient.getInstance().getAboutPageAsync();

  if (!res) notFound();

  return res;
};

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getAboutPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
