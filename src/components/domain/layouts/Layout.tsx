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
    </>
  );
}

export { Layout };
