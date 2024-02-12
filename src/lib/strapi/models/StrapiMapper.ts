import AboutPageVM from "@/models/AboutPageVM";
import StrapiSeo, { StrapiMetaSocial } from "./StrapiSeo";
import StrapiImage from "./StrapiImage";
import { Metadata } from "next";
import StrapiData, { StrapiAttributes } from "./StrapiData";
import HomePageVM from "@/models/HomePageVM";
import BlogPageVM from "@/models/BlogPageVM";
import ContactPageVM from "@/models/ContactPageVM";

// disallow instantiating
abstract class StrapiMapper {
  private static toStrapiImage(data: StrapiData<StrapiImage>): StrapiImage {
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

  private static toMetaSocial(data: StrapiAttributes<StrapiMetaSocial>): StrapiMetaSocial {
    return {
      socialNetwork: data.socialNetwork,
      title: data.title,
      description: data.description,
      image: data.image?.data && this.toStrapiImage(data.image.data),
    }
  }

  static toMetadata(seo: StrapiSeo): Metadata {
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

  static toStrapiSeo(data: StrapiAttributes<StrapiSeo>): StrapiSeo {
    return {
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      metaImage: data.metaImage?.data && this.toStrapiImage(data.metaImage.data),
      metaSocial: data.metaSocial.map(metaSocial => this.toMetaSocial(metaSocial)),
      keywords: data.keywords,
      metaRobots: data.metaRobots,
      structuredData: data.structuredData,
      metaViewport: data.metaViewport,
      canonicalURL: data.canonicalURL,
    }
  }

  static toHomePage(data: StrapiData<HomePageVM>): HomePageVM {
    return {
      seo: this.toStrapiSeo(data.attributes.seo),
      content: data.attributes.content,
    }
  }

  static toAboutPage(data: StrapiData<AboutPageVM>): AboutPageVM {
    return {
      title: data.attributes.title,
      content: data.attributes.content,
      seo: this.toStrapiSeo(data.attributes.seo),
    }
  }

  static toBlogPage(data: StrapiData<BlogPageVM>): BlogPageVM {
    return {
      seo: this.toStrapiSeo(data.attributes.seo),
    }
  }

  static toContactPage(data: StrapiData<ContactPageVM>): ContactPageVM {
    return {
      seo: this.toStrapiSeo(data.attributes.seo),
    }
  }
}

export default StrapiMapper;
