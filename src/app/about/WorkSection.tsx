import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import {WorkSection} from "@/models/AboutPageVM";

type Props = {
  workSection: WorkSection,
};

export default function WorkSection({workSection}: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className={'flex flex-col mt-12 sm:mt-14'}>
      <div>
        <h3 className={'sm:text-4xl text-3xl font-semibold'}>{workSection.position}</h3>
        <div className={'flex flex-col sm:flex-row justify-between'}>
          <span className={'sm:text-2xl text-xl font-semibold'}>At {workSection.company}</span>
          <span className={'sm:text-xl text-lg italic'}>{workSection.startDate} - {workSection.endDate}</span>
        </div>
      </div>
      {workSection.projects.length && workSection.projects.map(project => (
        <div key={project.project} className={'flex flex-col gap-6 sm:gap-8'}>
          <h4 className={'sm:text-3xl text-2xl font-semibold mt-10 sm:mt-12'}>{project.project}</h4>
          <div
            className={'markdown-container'}
            dangerouslySetInnerHTML={{__html: md.render(project.description)}}>
          </div>
          <div>
            <p>Languages: <span className={'font-semibold'}>{project.languages}</span></p>
            <p>Technologies: <span className={'font-semibold'}>{project.technologies}</span></p>
          </div>
        </div>
      ))}
    </div>
  )
}
