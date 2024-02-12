import ContactPage from "@/app/contact/components/ContactPage";
import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function Contact() {
  return (
    <ContactPage/>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getContactPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
