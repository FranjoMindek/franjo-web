import StrapiClient from '@/lib/strapi/StrapiClient';

export async function GET(): Promise<Response> {
  const sitemap = await StrapiClient.getInstance().getSitemap();

  return new Response(sitemap, { headers: { 'Content-Type': 'text/xml' } });
}
