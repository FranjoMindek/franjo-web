import Linkedin from '@img/social-medias/linkedin.svg'
import Github from '@img/social-medias/github.svg'

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
] as const;

export default socialMedias;


