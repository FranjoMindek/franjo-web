import StrapiSeo from "@/lib/strapi/models/StrapiSeo";

type AboutPageVM = {
    title: string,
    content: string, // md
    seo: StrapiSeo,
}

export default AboutPageVM;