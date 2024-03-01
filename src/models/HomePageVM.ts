import StrapiSeo from '@/lib/strapi/models/StrapiSeo';

type HomePageVM = {
  seo: StrapiSeo;
  content: string;
};

export default HomePageVM;
