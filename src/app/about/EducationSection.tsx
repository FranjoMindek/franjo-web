import {EducationSection} from "@/models/AboutPageVM";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";

type Props = {
  educationSection: EducationSection,
};

export default function EducationSection({educationSection}: Props) {
  const md = markdownIt().use(highlightjs); // keep this serverside

  return (
    <div className={'flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12'}>
      <div className={'flex flex-col gap-1'}>
        <h3 className={'sm:text-4xl text-3xl font-semibold'}>{educationSection.certificate}</h3>
        <div className={'flex flex-col sm:flex-row justify-between'}>
          <span className={'sm:text-2xl text-xl font-semibold'}>At {educationSection.institution}</span>
          <span className={'sm:text-2xl text-lg italic'}>{educationSection.startDate} - {educationSection.endDate}</span>
        </div>
      </div>
      <div
        className={'markdown-container markdown-about'}
        dangerouslySetInnerHTML={{__html: md.render(educationSection.description)}}>
      </div>
    </div>
  )
}
