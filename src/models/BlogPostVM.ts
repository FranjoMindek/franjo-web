import StrapiSeo from '@/lib/strapi/models/StrapiSeo';
import StrapiImage from '@/lib/strapi/models/StrapiImage';

type BlogPostVM = {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover: StrapiImage;
  published: string;
  content: string;
  seo: StrapiSeo;
};

export default BlogPostVM;
