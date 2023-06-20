import React from 'react';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <AuthProvider>
          <Main>{children}</Main>
        </AuthProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
