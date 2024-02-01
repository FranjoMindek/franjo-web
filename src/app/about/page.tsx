import AboutPage from "@/app/about/components/AboutPage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import { toMetadata } from "@/lib/strapi/models/StrapiMappers";

export default function About() {
  return (
    <AboutPage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getAboutPageAsync()).seo;

  return toMetadata(seo);
}