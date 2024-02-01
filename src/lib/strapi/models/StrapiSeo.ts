import StrapiImage from "./StrapiImage";

type StrapiSeo = {
  metaTitle: string,
  metaDescription: string,
  metaImage?: StrapiImage,
  metaSocial: StrapiMetaSocial[],
  keywords?: string,
  metaRobots?: string,
  structuredData?: string,
  metaViewport?: string,
  canonicalURL?: string,
}

export type StrapiMetaSocial = {
  socialNetwork: 'Facebook' | 'Twitter',
  title: string,
  description: string,
  image?: StrapiImage,
}

interface DateConstructor {
  ConvertToDateFromTS(msg: string): Date;
}

export default StrapiSeo;