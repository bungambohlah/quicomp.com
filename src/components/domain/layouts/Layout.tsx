import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import '~/styles/index.css';
import '~/styles/circle.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="relative z-10">{children}</div>
      <Footer />
      <a
        href="#home"
        className="fixed bottom-0 right-0 z-20 flex items-center justify-center w-10 h-10 mb-5 mr-5 text-lg text-white duration-300 bg-[#3221c4] rounded-full back-to-top hover:bg-[#412aff] page-scroll"
        title="Back to Top"
      >
        <i className="lni lni-arrow-up" />
      </a>
    </>
  );
}

export { Layout };
