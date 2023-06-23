import { PrismaClient } from '@prisma/client';

export async function onBeforeRender() {
  const prisma = new PrismaClient();
  const orders = await prisma.order.findMany();

  const pageProps = { orders };

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps,
    },
  };
}

// By default `pageContext` is available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ['pageProps'];
