import StrapiImage from "@/lib/strapi/models/StrapiImage";

type BlogPostPreviewVM = {
  id: number,
  slug: string,
  title: string,
  description: string,
  cover: StrapiImage,
}

export default BlogPostPreviewVM;
