import StrapiSeo from "@/lib/strapi/models/StrapiSeo";

type AboutPage = {
    // it has an id but its useless on single types
    // id: number, 
    title: string,
    content: string, // md
    seo: StrapiSeo,
}

export default AboutPage;