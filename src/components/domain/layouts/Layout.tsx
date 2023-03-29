import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
      <a
        href="#"
        className="fixed bottom-0 right-0 z-20 flex items-center justify-center w-10 h-10 mb-5 mr-5 text-lg text-white duration-300 bg-[#6655ef] rounded-full back-to-top hover:bg-[#825aff]"
        title="Back to Top"
      >
        <i className="lni lni-arrow-up" />
      </a>
    </>
  );
}

export { Layout };
