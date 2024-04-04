export type IconProps = { color?: string; size?: number };

export interface IChildren {
  children: ReactNode;
}

export interface IPageProps {
  pageProps: {
    searchParams?: {
      title?: string;
    };
  };
}
