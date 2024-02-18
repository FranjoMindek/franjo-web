import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function Blog() {
  return (
    <div className={'page-container'}>
      <p className={'text-3xl md:text-5xl'}>There is no blog yet</p>
      <p className={'text-3xl md:text-5xl pt-8'}>:(</p>
    </div>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getBlogPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
