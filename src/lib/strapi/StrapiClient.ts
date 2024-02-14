import qs from "qs";
import StrapiResponse from "@/lib/strapi/models/StrapiResponse";
import AboutPageVM from "@/models/AboutPageVM";
import HomePageVM from "@/models/HomePageVM";
import ContactPageVM from "@/models/ContactPageVM";
import BlogPageVM from "@/models/BlogPageVM";
import ApiEndpoints from "@/lib/strapi/api-endpoints";

type StrapiHeaders = Record<string, string>;

class StrapiClient {
  private static instance: StrapiClient;

  private readonly _baseUrl: string;
  private readonly _baseHeaders: StrapiHeaders;
  private readonly _defaultSeoPopulate = ['seo.metaImage', 'seo.metaSocial.image.*'];

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

  private async getAsync<T>(path: string, additionalHeaders?: StrapiHeaders): Promise<StrapiResponse<T>> {
    const url = `${this._baseUrl}/api/${path}`;
    const headers = additionalHeaders
      ? {...this._baseHeaders, ...additionalHeaders}
      : this._baseHeaders
    const res = await fetch(
      url,
      {
        method: "GET",
        headers,
      }
    );
    return await res.json();
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

  // public async getCatalogItemsAsync(): Promise<CatalogItemVM[]> {
  //   const query = qs.stringify(
  //     {
  //     },
  //     {
  //       encodeValuesOnly: true,
  //     }
  //   );
  //
  //   const res = await this.getCollectionAsync<CatalogItemVM>(`catalog-items?${query}`);
  //
  //   return res.data.map(x => toCatalogItem(x));
  // }

  // PAGES
  public async getHomePageAsync(): Promise<HomePageVM> {
    const query = qs.stringify(
      {
        populate: [...this._defaultSeoPopulate, 'content'],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await this.getAsync<HomePageVM>(`${ApiEndpoints.HomePage}?${query}`);

    return res.data;
  }

  public async getAboutPageAsync(): Promise<AboutPageVM> {
    const query = qs.stringify(
      {
        populate: [...this._defaultSeoPopulate],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await this.getAsync<AboutPageVM>(`${ApiEndpoints.AboutPage}?${query}`);

    return res.data;
  }

  public async getBlogPageAsync(): Promise<BlogPageVM> {
    const query = qs.stringify(
      {
        populate: [...this._defaultSeoPopulate],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await this.getAsync<BlogPageVM>(`${ApiEndpoints.BlogPage}?${query}`);

    return res.data;
  }

  public async getContactPageAsync(): Promise<ContactPageVM> {
    const query = qs.stringify(
      {
        populate: [...this._defaultSeoPopulate],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await this.getAsync<ContactPageVM>(`${ApiEndpoints.ContactPage}?${query}`);

    return res.data;
  }
}

export default StrapiClient;
