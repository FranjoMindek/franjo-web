import StrapiSeo from "./StrapiSeo";
import { Metadata } from "next";

// disallow instantiating
abstract class StrapiMapper {
  static toMetadata(seo: StrapiSeo): Metadata {
    // todo: meta social
    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      alternates: {
        canonical: seo.canonicalURL
      },
      keywords: seo.keywords,
      robots: {
        index: !seo.metaRobots?.includes('noindex'),
        follow: !seo.metaRobots?.includes('nofollow'),
      }
    };
  }
}

export default StrapiMapper;
