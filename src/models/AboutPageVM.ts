import StrapiSeo from "@/lib/strapi/models/StrapiSeo";

type AboutPageVM = {
    content: string,
    seo: StrapiSeo,
}

export default AboutPageVM;
