import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import { WorkSection } from '@/models/AboutPageVM';

type Props = {
  workSection: WorkSection;
};

export default function WorkSection({ workSection }: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className='flex flex-col'>
      <div>
        <h3 className='mb-1 text-3xl font-semibold sm:text-4xl'>
          {workSection.position}
        </h3>
        <div className='flex flex-col justify-between sm:flex-row'>
          <span className='text-xl font-semibold sm:text-2xl'>
            At {workSection.company}
          </span>
          <span className='text-lg italic sm:text-xl'>
            {workSection.startDate} - {workSection.endDate}
          </span>
        </div>
      </div>
      {workSection.projects.length &&
        workSection.projects.map(project => (
          <div key={project.project} className='flex flex-col gap-4 sm:gap-6'>
            <h4 className='mt-10 text-2xl font-semibold sm:mt-12 sm:text-3xl'>
              {project.project}
            </h4>
            <div
              className='markdown-container'
              dangerouslySetInnerHTML={{
                __html: md.render(project.description),
              }}
            ></div>
            <div>
              <p>
                Languages:{' '}
                <span className='font-semibold'>{project.languages}</span>
              </p>
              <p>
                Technologies:{' '}
                <span className='font-semibold'>{project.technologies}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
