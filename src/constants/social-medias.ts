export type SocialMedia = {
  name: string,
  url: string,
  picture: string,
}

const socialMedias: SocialMedia[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franjo-mindek/',
    picture: './img/social-medias/linkedin.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/FranjoMindek/',
    picture: './img/social-medias/github.svg',
  }
] as const;


export default socialMedias;


