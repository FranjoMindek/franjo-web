import BlogPage from "@/app/blog/components/BlogPage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function Blog() {
  return (
    <BlogPage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getBlogPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
