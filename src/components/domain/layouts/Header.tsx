import { Link } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '../auth/SignInButton';
import { SignOutButton } from '../auth/SignOutButton';
import LogoText from '../../../logo-text.png';

type ListItemProps = {
  className?: string;
};
const ListItem = ({ className = '' }: ListItemProps) => {
  return (
    <>
      <li>
        <a href="#home" className={className} aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#services" className={className}>
          Services
        </a>
      </li>
      <li>
        <a href="#features" className={className}>
          Feature
        </a>
      </li>
      <li>
        <a href="#contact" className={className}>
          Contact
        </a>
      </li>
    </>
  );
};

export const Header = () => {
  const { state } = useAuthState();
  return (
    <header id="header-wrap" className="relative">
      <nav className="navigation px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-blue-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={LogoText} className="h-6 mr-3 sm:h-9" alt="Company Logo" />
          </Link>
          <div className="flex gap-4 md:order-2">
            {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dropdown dropdown-end"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <ul tabIndex={0} className="p-2 mt-10 shadow menu dropdown-content bg-base-100 rounded-box w-52 top-2">
                <ListItem />
              </ul>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <ListItem className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent md:hover:text-blue-700 md:p-0" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
