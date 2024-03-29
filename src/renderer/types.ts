import React, { ReactElement } from 'react';

import type {
  PageContextBuiltIn,
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  // PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from 'vite-plugin-ssr/types';

type PageProps = Record<string, unknown>;
type Page = (pageProps: PageProps) => ReactElement;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
      keywords?: string;
      author?: string;
    };
    Layout?: React.FC<React.PropsWithChildren>;
  };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };
