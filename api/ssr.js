import { renderPage } from 'vite-plugin-ssr/server';

export default async function handler(req, res, next) {
  const pageContextInit = { urlOriginal: req.originalUrl };
  console.log('Request to url:', req.originalUrl);

  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    res.statusCode = 200;
    res.end();
    return;
  }

  const { body, statusCode, contentType, earlyHints } = httpResponse;
  if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
  res.status(statusCode).type(contentType).send(body);
}
