import AboutPageVM from "@/models/AboutPageVM";
import CatalogItemVM from "@/models/CatalogItemVM";
import StrapiSeo, { StrapiMetaSocial } from "./StrapiSeo";
import StrapiImage from "./StrapiImage";
import { Metadata } from "next";
import StrapiData, { StrapiAttributes } from "./StrapiData";
import HomePageVM from "@/models/HomePageVM";

export const toStrapiImage = (data: StrapiData<StrapiImage>): StrapiImage => {
  return {
    name: data.attributes.name,
    alternativeText: data.attributes.alternativeText,
    caption: data.attributes.caption,
    url: data.attributes.url,
    ext: data.attributes.ext,
    mime: data.attributes.mime,
    width: data.attributes.width,
    height: data.attributes.height,
    formats: {
      small: data.attributes.formats.small,
      thumbnail: data.attributes.formats.thumbnail,
    },
  }
}

export const toMetaSocial = (data: StrapiAttributes<StrapiMetaSocial>): StrapiMetaSocial => {
  return {
    socialNetwork: data.socialNetwork,
    title: data.title,
    description: data.description,
    image: data.image?.data && toStrapiImage(data.image.data),
  }
}

export const toMetadata = (seo: StrapiSeo): Metadata => {
  const metadata: Metadata = {};

  metadata.title = seo.metaTitle;
  metadata.description = seo.metaDescription;
  metadata.alternates = {
    canonical: seo.canonicalURL
  };
  // TODO: robots
  // TODO?: social, when will i need that ?
  metadata.keywords = seo.keywords;

  return metadata;
}

export const toStrapiSeo = (data: StrapiAttributes<StrapiSeo>): StrapiSeo => {
  return {
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    metaImage: data.metaImage?.data && toStrapiImage(data.metaImage.data),
    metaSocial: data.metaSocial.map(metaSocial => toMetaSocial(metaSocial)),
    keywords: data.keywords,
    metaRobots: data.metaRobots,
    structuredData: data.structuredData,
    metaViewport: data.metaViewport,
    canonicalURL: data.canonicalURL,
  }
}

export const toCatalogItem = (data: StrapiData<Omit<CatalogItemVM, "id">>): CatalogItemVM => {
  return {
    id: data.id,
    description: data.attributes.description,
    price: data.attributes.price,
    name: data.attributes.name,
  }
}

export const toAboutPage = (data: StrapiData<AboutPageVM>): AboutPageVM => {
  return {
    title: data.attributes.title,
    content: data.attributes.content,
    seo: toStrapiSeo(data.attributes.seo),
  }
}

export const toHomePage = (data: StrapiData<HomePageVM>): HomePageVM => {
  return {
    seo: toStrapiSeo(data.attributes.seo),
    content: data.attributes.content,
  }
}
