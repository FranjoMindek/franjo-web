export type Route = {
  name: string,
  path: string,
}

const routes =  {
  Home: {
    name: "Home",
    path: "/"
  },
  Blog: {
    name: "Blog",
    path: "/blog",
  },
  About: {
    name: "About",
    path: "/about",
  },
  Contact: {
    name: "Contact",
    path: "/contact",
  },
  CookiePolicy: {
    name: "Cookie Policy",
    path: "/cookie-policy",
  },
  PrivacyPolicy: {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
} as const;

export const navigationRoutes = [
  routes.Home,
  routes.About,
  routes.Blog,
  routes.Contact
]

export default routes;
