export type NavItemType = {
  title: string;
  href?: string;
  submenu?: {
    title: string;
    description: string;
    href: string;
    icon: any;
  }[];
  callsToAction?: {
    title: string;
    href: string;
    icon: string;
  }[];
};
