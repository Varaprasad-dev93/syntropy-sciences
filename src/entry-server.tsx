import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { NotFound } from './NotFound';
import { organizationJsonLd } from './company';

export type Page = 'home' | 'notFound';

/** Renders a page to static HTML at build time. Used only by scripts/prerender.mjs. */
export function render(page: Page): { html: string; head: string } {
  if (page === 'notFound') {
    return {
      html: renderToString(
        <StrictMode>
          <NotFound />
        </StrictMode>,
      ),
      head: '',
    };
  }
  // `<` is escaped so no string in the data can close the script tag early.
  const jsonLd = JSON.stringify(organizationJsonLd()).replace(/</g, '\\u003c');
  return {
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    ),
    head: `<script type="application/ld+json">${jsonLd}</script>`,
  };
}
