import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import { Link } from '~/components/domain/Link';
import { useAuthState } from '~/components/contexts/UserContext';
import LogoText from '../../../logo-text.png';

type ListItemProps = {
  className?: string;
};
const ListItem = ({ className = '' }: ListItemProps) => {
  return (
    <>
      <li>
        <a href="#home" className={`page-scroll ${className}`} aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#services" className={`page-scroll ${className}`}>
          Services
        </a>
      </li>
      <li>
        <a href="#features" className={`page-scroll ${className}`}>
          Feature
        </a>
      </li>
      <li>
        <a href="#contact" className={`page-scroll ${className}`}>
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
      <nav className="navigation px-2 sm:px-4 py-2.5 fixed w-full z-30 top-0 left-0 border-none">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <img src={LogoText} className="h-6 mr-3 sm:h-9 contrast-150" alt="Company Logo" />
          </Link>
          <div className="flex gap-4 md:order-2">
            {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? null : (
              <Link href="/user/dashboard">
                <button type="button" className="btn-outline">
                  <span className="md:hidden">
                    <Squares2X2Icon className="w-6 h-6" />
                  </span>
                  <span className="hidden md:block">Dashboard</span>
                </button>
              </Link>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg md:hidden dropdown dropdown-end text-[#8f9dac]"
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
              <ul tabIndex={0} className="z-30 p-2 mt-10 bg-white shadow menu dropdown-content rounded-box w-52 top-2">
                <ListItem className="text-[#283262]" />
              </ul>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <ListItem className="block py-2 pl-3 pr-4 text-[#283262] rounded hover:bg-transparent md:hover:text-transparent md:hover:bg-clip-text md:hover:bg-gradient-to-tr md:hover:from-[#B721FF] md:hover:to-[#21D4FD] md:p-0 md:hover:bg-[#21D4FD]" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
