import ContactForm from "@/app/contact/ContactForm";
import StrapiClient from "@/lib/strapi/StrapiClient";
import StrapiMapper from "@/lib/strapi/models/StrapiMapper";

export default function Contact() {
  return (
    <div className={'page-container justify-center'}>
      <div className={'w-full max-w-prose flex flex-col gap-6 sm:gap-8 '}>
        <h1 className={'font-bold sm:text-6xl text-5xl mb-6 sm:mb-8'}>Contact</h1>
        <p>
          If you are interested in contacting me, you can use the form below.
        </p>
        <ContactForm/>
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const seo = (await StrapiClient.getInstance().getContactPageAsync()).seo;

  return StrapiMapper.toMetadata(seo);
}
