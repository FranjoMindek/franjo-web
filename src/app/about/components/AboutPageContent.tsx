import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import styles from './AboutPageContent.module.scss'

const education = `
## Education
### Bacherlos Degree @ FER, University of Zagreb
*Sep 2019 – Jul 2022*

Mostly an exploration period for me, trying to find out what interest me from game development, mathemtical foundations so I can learn about machine learning to going deep into software engineering.   
Some of relevant subjects I went through forming my interests:

 - Game Developer: Computer Graphics, Interactive Simulation Systems
 - Matematics: Statistical Data Analysis, Numerical Mathematics
 - Software Engineering: Design Patterns, Software Engineering
 
Decided I wanted to persue software engineering to its depths.

### Masters  Degree @ FER, University of Zagreb
*Sep 2022 – Jul 2024 (expected)*

Happy with how much I learned about software engineering, but dissapointed as in later semesters there were no more subject that interested me. Some of notable favorites: Distributed System, Arhitecture and Development of Intelligent Systems, Information Systems.
`;

const work = `## Work
### Student Intership @ NEOS 
*Aug 2022 - Jul 2023* 

#### Internal Software for Roadside Assistance

Worked for a client on a internal software in domain of roadside assistance. Backend heavy application with a lof of business logic and interconnected data. My introduction to project was abrupt but very (naucilo me), helped me form a lot of my opinions about what I want of architecture in software engineering.

**Languages:** Typescript, Java

**Techonolgies:** Spring Boot,  Angular, Oracle DB, ELK

### Full Time @ Pixion 
*Jul 2023 - Present*

#### LLM Proof of concept and Prototype

Worked on a internal LLM prototype to explore current state of LLMs, find out their capabilities and how to write business logic around them. Project with two students on it where we had a lot of freedom to experiment. Delivered basic prototype.

**Languages:** Python, C#, React Native

**Techonolgies:** LangChain, LlamaIndex, Litestar, .NET Core, Various vector databases

#### Pixion Website

From time to time I would recieve a task to improve, refactor or fix something on Pixion website. Learned alot about SEO and benefits of headless CMS. Also realised that time management and prediction is an important skill.

**Languages:** Typescript

**Techonolgies:** NextJs, Strapi 

#### LLM Case Study
Worked on LLM case study where we wanted to derive a clean architecture for LLM based application for future projects while also doing various tests with real data for purpose of writing case study blog posts. Project of four people which was a lot more directed then previous LLM project. During the project I learned a lot about teamwork and that communicating opinions and concerns can have a lot of influence.
Languages: C#
Technologies: .NET CORE, Semantic Kernel, Postgres
`;


const AboutPageContent = () => {
  const md = markdownIt().use(highlightjs); // keep this serverside
  const temp = [education, work];

  return (
    <div className={'flex flex-col gap-8 max-w-prose'}>
      {temp.length && temp.map((markdownBlock, i) => (
        <div
          key={i}
          className={styles.contentContainer}
          dangerouslySetInnerHTML={{__html: md.render(markdownBlock)}}>
        </div>
      ))
      }
    </div>
  )
};

export default AboutPageContent;
