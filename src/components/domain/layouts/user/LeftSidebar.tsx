import { Link } from '~/components/domain/Link';
import LogoText from '~/logo-text.png';
import { usePageContext } from '~/renderer/usePageContext';
import LeftSidebarItem from './LeftSidebarItem';

function LeftSidebar() {
  const { urlPathname = '' } = usePageContext();
  const urlReplaced = urlPathname.replace(/\/$/, '');

  return (
    <div className="drawer-side">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay" />
      <ul className="pt-8 lg:pt-4 menu w-80 h-full bg-base-100 text-base-content">
        <li className="mb-2 text-xl font-semibold">
          <Link href="/user/dashboard">
            <img className="w-24" src={LogoText} alt="Company Logo" />
          </Link>
        </li>
        <li>
          <LeftSidebarItem href="/user/dashboard" title="Dashboard" isActive={urlReplaced === '/user/dashboard'} />
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
