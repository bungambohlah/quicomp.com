import { NavLink, Link, useLocation } from 'react-router-dom';
import { userDashboardRoutes as routes } from '~/components/router/Router';
import LogoText from '~/logo-text.png';

function LeftSidebar() {
  const location = useLocation();

  return (
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay" />
      <ul className="pt-2 menu w-80 bg-base-100 text-base-content">
        <li className="mb-2 text-xl font-semibold">
          <Link to="/user/dashboard">
            <img className="w-24" src={LogoText} alt="Company Logo" />
          </Link>
        </li>
        {(routes &&
          routes.children.map((route, k) => {
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
          })) ||
          null}
      </ul>
    </div>
  );
}

export default LeftSidebar;
