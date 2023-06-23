import { renderToString } from 'react-dom/server';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import logoSvgUrl from '../favicon.svg';
import logoIcon from '../logo.png';
import { Layout as LayoutDefault } from '../components/domain/layouts/Layout';
import type { PageContextServer } from './types';

// This render() hook can support SSR, ISR, and SSG
// see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const Layout = pageContext.exports.Layout || LayoutDefault;
  let pageHtml = dangerouslySkipEscape(renderToString(<PageShell pageContext={pageContext}>{null}</PageShell>));
  if (Page && pageProps && typeof pageProps.is404 !== 'boolean') {
    pageHtml = dangerouslySkipEscape(
      renderToString(
        <PageShell pageContext={pageContext}>
          <Layout>
            <Page {...pageProps} />
          </Layout>
        </PageShell>
      )
    );
  }

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Quicomp - Professional Computer Services Company';
  const desc =
    (documentProps && documentProps.description) ||
    'Quicomp provides professional computer services to protect and fix errors on your computer.';
  const keywords =
    (documentProps && documentProps.keywords) ||
    'Quicomp, computer service, computer protection, error fixing, computer support';
  const author = (documentProps && documentProps.author) || 'Quicomp Company';
  const mainUrl = 'https://quicomp.afif.dev';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <!--====== Favicon Icon ======-->
        <link rel="shortcut icon" type="image/svg+xml" href="${logoSvgUrl}" />
        <title>${title}</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="${keywords}" />
        <meta name="author" content="${author}">
        <meta name="robots" content="noindex" />

        <!-- Open Graph metadata -->
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${desc}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${mainUrl}">
        <meta property="og:image" content="${logoIcon}">

        <!-- Twitter Card metadata -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${desc}">
        <meta name="twitter:image" content="${logoIcon}">
        
        <!-- Other important SEO meta tags -->
        <meta name="robots" content="index, follow">
        <meta name="googlebot" content="index, follow">
        <meta name="bingbot" content="index, follow">
        <link rel="canonical" href="${mainUrl}">

        <!-- Icon -->
        <link rel="stylesheet" type="text/css" href="/css/lineicons.css">
        <!-- Animate -->
        <link rel="stylesheet" type="text/css" href="/css/animate.min.css">
        <!-- Tiny Slider  -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/tiny-slider.min.css"> -->
        <link rel="stylesheet" type="text/css" href="/css/aos.css">
      </head>
      <body>
        <div id="react-root">${pageHtml}</div>
        <script src="/js/aos.js"></script>
        <!-- <script src="/js/tiny-slider.js"></script> -->
        <script src="/js/index.js"></script>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];
