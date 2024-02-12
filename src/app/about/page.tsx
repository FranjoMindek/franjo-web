import AboutPage from "@/app/about/components/AboutPage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function About() {
  return (
    <AboutPage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getAboutPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
