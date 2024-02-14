import Linkedin from '@img/social-media/linkedin.svg'
import Github from '@img/social-media/github.svg'

export type SocialMedia = {
  name: string,
  url: string,
  picture: SVGComponent,
}

const socialMedias: SocialMedia[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franjo-mindek/',
    picture: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/FranjoMindek/',
    picture: Github,
  }
];

export default socialMedias;


