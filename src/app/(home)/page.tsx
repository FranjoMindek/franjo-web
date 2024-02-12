import HomePage from "@/app/(home)/components/HomePage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function Home() {
  return (
    <HomePage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getHomePageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
