import StrapiSeo from "./StrapiSeo";
import { Metadata } from "next";

// disallow instantiating
abstract class StrapiMapper {
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
}

export default StrapiMapper;
