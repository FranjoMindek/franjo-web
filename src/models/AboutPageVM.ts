import StrapiSeo from "@/lib/strapi/models/StrapiSeo";

type AboutPageVM = {
    introduction: string,
    seo: StrapiSeo,
    educationSections: EducationSection[],
    workSections: WorkSection[],
}

export type EducationSection = {
    certificate: string,
    institution: string,
    description: string,
    startDate: string,
    endDate: string,
}

export type WorkSection = {
    position: string,
    company: string,
    projects: WorkSectionProject[],
    startDate: string,
    endDate: string,
}

export type WorkSectionProject = {
    project: string,
    description: string,
    technologies: string,
    languages: string,
}


export default AboutPageVM;
