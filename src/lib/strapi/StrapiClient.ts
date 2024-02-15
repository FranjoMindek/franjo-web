import qs from "qs";
import StrapiResponse from "@/lib/strapi/models/StrapiResponse";
import AboutPageVM from "@/models/AboutPageVM";
import HomePageVM from "@/models/HomePageVM";
import ContactPageVM from "@/models/ContactPageVM";
import BlogPageVM from "@/models/BlogPageVM";
import StrapiEndpoint from "@/lib/strapi/strapi-endpoint";

type StrapiHeaders = Record<string, string>;

class StrapiClient {
  private static instance: StrapiClient;

  private readonly _baseUrl: string;
  private readonly _baseHeaders: StrapiHeaders;
  private readonly _defaultSeoPopulate = ['seo.metaImage', 'seo.metaSocial.image.*'];
  private readonly _defaultPageQuery = qs.stringify(
    {
      populate: [...this._defaultSeoPopulate],
    },
    {
      encodeValuesOnly: true,
    }
  );

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

  /*** PAGES ***/
  public async getHomePageAsync(): Promise<HomePageVM> {
    const res = await this.getAsync<HomePageVM>(StrapiEndpoint.HomePage, this._defaultPageQuery);

    return res.data;
  }

  public async getAboutPageAsync(): Promise<AboutPageVM> {
    const res = await this.getAsync<AboutPageVM>(StrapiEndpoint.AboutPage, this._defaultPageQuery);

    return res.data;
  }

  public async getBlogPageAsync(): Promise<BlogPageVM> {
    const res = await this.getAsync<BlogPageVM>(StrapiEndpoint.BlogPage, this._defaultPageQuery);

    return res.data;
  }

  public async getContactPageAsync(): Promise<ContactPageVM> {
    const res = await this.getAsync<ContactPageVM>(StrapiEndpoint.ContactPage, this._defaultPageQuery);

    return res.data;
  }

  /*** Other ***/
  public async getSitemap(): Promise<string> {
    const url = `${this._baseUrl}/api/${StrapiEndpoint.Sitemap}`;
    const headers = this._baseHeaders
    const res = await fetch(
      url,
      {
        method: "GET",
        headers,
      }
    );
    return await res.text();
  }

  /*** HELPER FUNCTIONS ***/
  private async getAsync<T>(endpoint: StrapiEndpoint, query: string, additionalHeaders?: StrapiHeaders): Promise<StrapiResponse<T>> {
    const url = `${this._baseUrl}/api/${endpoint}?${query}`;
    const headers = {
      ...this._baseHeaders,
      ...additionalHeaders
    };

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
    const headers = {
      ...this._baseHeaders,
      'Content-Type': 'application/json',
      ...additionalHeaders
    }

    const res = await fetch(
      url,
      {
        method: "POST",
        headers,
        body
      },
    );
    return await res.json();
  }

  private async postFormDataAsync(path: string, body: any, additionalHeaders?: StrapiHeaders) {
    const url = `${this._baseUrl}/api/${path}`;
    const headers = {
      ...this._baseHeaders,
      'Content-Type': 'multipart/form-data',
      ...additionalHeaders
    }

    const res = await fetch(
      url,
      {
        method: "POST",
        headers,
        body
      }
    );
    return await res.json();
  }
}

export default StrapiClient;
