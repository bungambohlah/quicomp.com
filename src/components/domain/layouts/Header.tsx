import { Outlet, Link } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '../auth/SignInButton';
import { SignOutButton } from '../auth/SignOutButton';

export const Header = () => {
  const { state } = useAuthState();
  return (
    <>
      <header id="header-wrap" className="relative">
        <div className="fixed top-0 left-0 z-30 w-full duration-300 navigation">
          <div className="container">
            <nav className="relative flex items-center justify-between py-2 duration-300 navbar navbar-expand-lg">
              <Link to="/">
                <span className="navbar-brand">Quicomp</span>
              </Link>
              <button
                className="block navbar-toggler focus:outline-none lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>

              <div
                className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul className="items-center justify-center mr-auto navbar-nav lg:flex">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#feature">
                      feature
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden header-btn sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <a
                  className="px-10 py-3 text-blue-600 duration-300 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
                  href="#feature"
                >
                  FAQ
                </a>
              </div>
              <div className="hidden header-btn sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
