import HomePage from "@/app/(home)/components/HomePage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import { toMetadata } from "@/lib/strapi/models/StrapiMappers";

export default function Home() {
  return (
    <HomePage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getHomePageAsync()).seo;

  return toMetadata(seo);
}