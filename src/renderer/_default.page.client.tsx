import { createRoot, hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import { Layout as LayoutDefault } from '../components/domain/layouts/Layout';
import type { PageContextClient } from './types';

// This render() hook can support SSR, ISR, and SSG
// see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const Layout = pageContext.exports.Layout || LayoutDefault;

  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined');
  const root = document.getElementById('react-root');
  if (!root) throw new Error('DOM element #react-root not found');

  if (
    // We detect SPAs by using the fact that `innerHTML === ''` for the first render of an SPA
    root.innerHTML === '' ||
    // Upon Client Routing page navigation, vite-plugin-ssr sets `pageContext.isHydration`
    // to `false`.
    !pageContext.isHydration
  ) {
    // - SPA pages don't have any hydration steps: they need to be fully rendered.
    // - Page navigation of SSR pages also need to be fully rendered (if we use Client Routing)
    const rootReact = createRoot(root);
    rootReact.render(
      <PageShell pageContext={pageContext}>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </PageShell>
    );
  } else {
    // The first render of SSR pages is merely a hydration (instead of a full render)
    hydrateRoot(
      root,
      <PageShell pageContext={pageContext}>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </PageShell>
    );
  }
}

export { render };

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
