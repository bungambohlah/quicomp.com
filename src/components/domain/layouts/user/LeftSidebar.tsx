// import { usePageContext } from '~/renderer/usePageContext';
import { Link } from '~/components/domain/Link';
// import { userDashboardRoutes as routes } from '~/components/router/Router';
import LogoText from '~/logo-text.png';

function LeftSidebar() {
  return (
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay" />
      <ul className="pt-2 menu w-80 bg-base-100 text-base-content">
        <li className="mb-2 text-xl font-semibold">
          <Link href="/user/dashboard">
            <img className="w-24" src={LogoText} alt="Company Logo" />
          </Link>
        </li>
        {/* {(routes &&
          routes.children.map((route, k) => {
            if (route.path !== '*') {
              return (
                <li key={k}>
                  <NavLink
                    end
                    to={route.index ? routes.path : route.path}
                    className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`}
                  >
                    {route.icon} {route.name}
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      />
                    ) : null}
                  </NavLink>
                </li>
              );
            }

            return null;
          })) ||
          null} */}
      </ul>
    </div>
  );
}

export default LeftSidebar;
