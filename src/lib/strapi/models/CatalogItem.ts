import {StrapiData} from "@/lib/strapi/models/StrapiResponse";
import StrapiModel from "@/lib/strapi/models/StrapiModel";
import CatalogItem from "@/models/CatalogItem";

export type CatalogItemStrapi = Omit<CatalogItem, "id"> & StrapiModel;

export const toCatalogItem = (data: StrapiData<CatalogItemStrapi>): CatalogItem => {
  return {
    id: data.id,
    description: data.attributes.description,
    price: data.attributes.price,
    name: data.attributes.name,
  }
}

export default CatalogItem;
