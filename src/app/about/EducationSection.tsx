import { EducationSection } from '@/models/AboutPageVM';
import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';

type Props = {
  educationSection: EducationSection;
};

export default function EducationSection({ educationSection }: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className='flex flex-col gap-6 sm:gap-8'>
      <div>
        <h3 className='mb-1 text-3xl font-semibold sm:text-4xl'>
          {educationSection.certificate}
        </h3>
        <div className='flex flex-col justify-between sm:flex-row'>
          <span className='text-xl font-semibold sm:text-2xl'>
            At {educationSection.institution}
          </span>
          <span className='text-lg italic sm:text-xl'>
            {educationSection.startDate} - {educationSection.endDate}
          </span>
        </div>
      </div>
      <div
        className='markdown-container'
        dangerouslySetInnerHTML={{
          __html: md.render(educationSection.description),
        }}
      ></div>
    </div>
  );
}
