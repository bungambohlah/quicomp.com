import React, { useEffect, useRef } from 'react';
import Header from './Header';

function PageContent({ children }: { children: React.ReactNode }) {
  const mainContentRef = useRef<HTMLElement | null>(null);

  // Scroll back to top on new page load
  useEffect(() => {
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="flex flex-col drawer-content">
      <Header />
      <main className="flex-1 px-6 pt-8 overflow-y-auto bg-base-200" ref={mainContentRef}>
        <div className="h-16">{children}</div>
      </main>
    </div>
  );
}

export default PageContent;
