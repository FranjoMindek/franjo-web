import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";

const AboutPage = () => {
  const md = markdownIt().use(highlightjs); // keep this serverside


  return (
    <div className={'page-container'}>
      <div className={'flex flex-col max-w-prose'}>
        <h1 className={'text-6xl'}>About</h1>
        <div
          className={'markdown-container'}
          dangerouslySetInnerHTML={{__html: md.render(markdown)}}>
        </div>
      </div>
    </div>
  )
};

export default AboutPage;

const markdown = `
## Education
### Bachelors Degree in Computing @ FER, UniZG
*Sep 2019 – Jul 2022*

Mostly an exploration period for me, trying to find out what interest me from game development, mathematical foundations so I can learn about machine learning to going deep into software engineering.   

Wrote a Bachelors thesis on topic of Semi-Supervised Learning, after which I decided I wanted to pursue software engineering instead.

### Masters Degree in Computing @ FER, UniZG
*Sep 2022 – Jul 2024 (expected)*

Continuing in software engineering I covered topics such as: Distributed System, Arhitecture and Development of Intelligent Systems, Information Systems.

My Masters thesis has yet be decided. 

### Sofascore Frontend Academy @ Sofascore
*Feb 2023 - Jun 2023*

A very educational introduction to **React** and **Next.js** by great mentors.

Successfully passed with [certification](https://api.sofascore.com/api/v1/asset/sofascore-academy/12bdf37145e33ff68e864ea9c78f8ebb).

## Work
### Student Internship @ NEOS 
*Aug 2022 - Jul 2023* 

#### Internal Software for Roadside Assistance Company

Backend heavy application with a lot of business logic and interconnected data. My introduction to project was abrupt but very rewarding, learned about importance of good architecture.

**Languages:** Typescript, Java

**Technologies:** Spring Boot, Angular, Oracle DB, ELK stack

### Full Time @ Pixion 
*Jul 2023 - Present*

#### LLM Application Prototype

Internal prototype for exploring current state of LLMs and how to write business logic around them. Delivered basic prototype.

**Languages:** Python, C#, Typescript

**Technologies:** LangChain, LlamaIndex, Litestar, Various vector databases, .NET Core, React Native

#### Pixion Website

Occasional improvement, refactor or fixing of Pixion website. Learned about importance of time management.

**Languages:** Typescript

**Technologies:** Next.js, Strapi 

#### LLM Case Study

LLM case study where we wanted to derive a clean architecture template for LLM based application followed with real data testing.

**Languages:** C#

**Technologies:** .NET CORE, Semantic Kernel, Postgres
`;
