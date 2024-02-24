import {EducationSection} from "@/models/AboutPageVM";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";

type Props = {
  educationSection: EducationSection,
};

export default function EducationSection({educationSection}: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className={'flex flex-col mt-12 sm:mt-14 gap-6 sm:gap-8'}>
      <div>
        <h3 className={'sm:text-4xl text-3xl font-semibold'}>{educationSection.certificate}</h3>
        <div className={'flex flex-col sm:flex-row justify-between'}>
          <span className={'sm:text-2xl text-xl font-semibold'}>At {educationSection.institution}</span>
          <span className={'sm:text-xl text-lg italic'}>{educationSection.startDate} - {educationSection.endDate}</span>
        </div>
      </div>
      <div
        className={'markdown-container'}
        dangerouslySetInnerHTML={{__html: md.render(educationSection.description)}}>
      </div>
    </div>
  )
}
