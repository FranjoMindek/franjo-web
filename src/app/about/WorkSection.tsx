import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import {WorkSection} from "@/models/AboutPageVM";

type Props = {
  workSection: WorkSection,
};

export default function WorkSection({workSection}: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className={'flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12'}>
      <div className={'flex flex-col gap-1'}>
        <h3 className={'sm:text-4xl text-3xl font-semibold'}>{workSection.position}</h3>
        <div className={'flex flex-col sm:flex-row justify-between'}>
          <span className={'sm:text-2xl text-xl font-semibold'}>At {workSection.company}</span>
          <span className={'sm:text-xl text-lg italic'}>{workSection.startDate} - {workSection.endDate}</span>
        </div>
      </div>
      {workSection.projects.length && workSection.projects.map(project => (
        <div key={project.project} className={'flex flex-col gap-4 pt-4'}>
          <h4 className={'sm:text-2xl text-xl font-semibold'}>{project.project}</h4>
          <div className={'flex flex-col gap-2'}>
            <div
              className={'markdown-container'}
              dangerouslySetInnerHTML={{__html: md.render(project.description)}}>
            </div>
            <div>
              <p>Languages: <span className={'font-semibold'}>{project.languages}</span></p>
              <p>Technologies: <span className={'font-semibold'}>{project.technologies}</span></p>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}
