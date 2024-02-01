import qs from "qs";
import StrapiResponse, { StrapiCollectionTypeResponse, StrapiSignleTypeResponse } from "@/lib/strapi/models/StrapiResponse";
import {toAboutPage, toCatalogItem} from "@/lib/strapi/models/StrapiMappers";
import CatalogItem from "@/models/CatalogItemVM";
import AboutPage from "@/models/AboutPageVM";

type StrapiHeaders = Record<string, string>;

class StrapiClient {
  private static instance: StrapiClient;

  private readonly _baseUrl: string;
  private readonly _baseHeaders: StrapiHeaders;
  private readonly _defaultSeoPopulate = ['seo.metaImage', 'seo.metaSocial.image.*'];
  // private readonly _defaultMarkdownPopulate = 

  private constructor() {
    const baseUrl = process.env.STRAPI_API_URL;
    if (!baseUrl) throw new Error("Strapi API URL is undefined!");
    const apiToken = process.env.STRAPI_API_TOKEN;
    if (!apiToken) throw new Error("Strapi API token is undefined!");

    this._baseUrl = baseUrl;
    this._baseHeaders = {
      'Authorization': `Bearer ${apiToken}`,
    };
  }

  public static getInstance(): StrapiClient {
    if (!StrapiClient.instance) {
      StrapiClient.instance = new StrapiClient();
    }

    return StrapiClient.instance;
  }

  // TODO: figure better way to type response
  private async getSingleAsync<T>(path: string, additionalHeaders?: StrapiHeaders): Promise<StrapiSignleTypeResponse<T>> {
    return await this._getAsync<T>(path, additionalHeaders) as StrapiSignleTypeResponse<T>;
  }

  private async getCollectionAsync<T>(path: string, additionalHeaders?: StrapiHeaders): Promise<StrapiCollectionTypeResponse<T>> {
    return await this._getAsync<T>(path, additionalHeaders) as StrapiCollectionTypeResponse<T>;
  }

  private async _getAsync<T>(path: string, additionalHeaders?: StrapiHeaders): Promise<StrapiResponse<T>> {
    const url = `${this._baseUrl}/api/${path}`;
    const headers = additionalHeaders
      ? {...this._baseHeaders, ...additionalHeaders}
      : this._baseHeaders
    const res = await fetch(
      url,
      {
        method: "GET",
        headers
      }
    );
    return res.json();
  }

  private async postJSONAsync(path: string, body: any, additionalHeaders?: StrapiHeaders) {
    const url = `${this._baseUrl}/api/${path}`;
    const jsonBaseHeaders = {...this._baseHeaders,
      'Content-Type': 'application/json',
    };
    const headers = additionalHeaders
      ? {...jsonBaseHeaders, ...additionalHeaders}
      : jsonBaseHeaders

    const res = await fetch(
      url,
      {
        method: "POST",
        headers,
        body
      },
    );
    return res.json();
  }

  private async postFormDataAsync(path: string, body: any, additionalHeaders?: StrapiHeaders) {
    const url = `${this._baseUrl}/api/${path}`;
    const formDataBaseHeaders = {...this._baseHeaders,
      'Content-Type': 'multipart/form-data',
    };
    const headers = additionalHeaders
      ? {...formDataBaseHeaders, ...additionalHeaders}
      : formDataBaseHeaders

    const res = await fetch(
        url,
      {
        method: "POST",
        headers,
        body
      }
    );
    return res.json();
  }

  public async getCatalogItemsAsync(): Promise<CatalogItem[]> {
    const query = qs.stringify(
      {
      },
      {
        encodeValuesOnly: true,
      }
    );

    const res = await this.getCollectionAsync<CatalogItem>(`catalog-items?${query}`);

    return res.data.map(x => toCatalogItem(x));
  }

  public async getAboutPageAsync(): Promise<AboutPage> {
    const query = qs.stringify(
      {
        populate: [...this._defaultSeoPopulate],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await this.getSingleAsync<AboutPage>(`about-page?${query}`);

    return toAboutPage(res.data);
  }

}

export default StrapiClient;
