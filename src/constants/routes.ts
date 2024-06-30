export type Route = {
  name: string;
  path: string;
  active: (name: string) => boolean;
};

const routes: Record<string, Route> = {
  Home: {
    name: 'Home',
    path: '/',
    active: (name: string) => name === '/',
  },
  Blog: {
    name: 'Blog',
    path: '/blog',
    active: (name: string) => name.includes('/blog'),
  },
  CookiePolicy: {
    name: 'Cookie Policy',
    path: '/cookie-policy',
    active: (name: string) => name === '/cookie-policy',
  },
  PrivacyPolicy: {
    name: 'Privacy Policy',
    path: '/privacy-policy',
    active: (name: string) => name === '/privacy-policy',
  },
};

export const navigationRoutes = [routes.Home, routes.Blog] as const;

export default routes;
