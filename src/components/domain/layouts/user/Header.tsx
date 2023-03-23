import { themeChange } from 'theme-change';
import React, { useEffect, useState } from 'react';
// import BellIcon from '@heroicons/react/24/outline/BellIcon';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';
import { useSignOut } from '~/components/contexts/UserContext';

function Header() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'));
  const { signOut } = useSignOut();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project

    if (currentTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme('dark');
      } else {
        setCurrentTheme('winter');
      }
    }
  }, []);

  function logoutUser() {
    signOut().then(() => {
      localStorage.clear();
      window.location.href = '/';
    });
  }

  return (
    <>
      <div className="z-10 flex justify-between shadow-md navbar bg-base-100 ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="">
          <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
            <Bars3Icon className="inline-block w-5 h-5" />
          </label>
          <h1 className="ml-2 text-2xl font-semibold">Dashboard</h1>
        </div>

        <div className="order-last">
          {/* Winter and dark theme selection toogle **/}
          <label className="swap ">
            <input type="checkbox" title="choose theme" />
            <SunIcon
              data-set-theme="winter"
              data-act-class="ACTIVECLASS"
              className={`fill-current w-6 h-6 ${currentTheme === 'dark' ? 'swap-on' : 'swap-off'}`}
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={`fill-current w-6 h-6 ${currentTheme === 'winter' ? 'swap-on' : 'swap-off'}`}
            />
          </label>

          {/* Notification icon */}
          {/* <button className="ml-4 btn btn-ghost btn-circle" onClick={() => openNotification()}>
            <div className="indicator">
              <BellIcon className="w-6 h-6" />
              {noOfNotifications > 0 ? (
                <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span>
              ) : null}
            </div>
          </button> */}

          {/* Profile icon, opening menu on click */}
          <div className="ml-4 dropdown dropdown-end">
            <button
              tabIndex={0}
              className="inline-flex items-center justify-center btn-ghost btn-circle avatar"
              title="menu"
            >
              <div className="w-10 rounded-full">
                <UserCircleIcon />
              </div>
            </button>
            <div className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <ul tabIndex={0}>
                <li>
                  <a onClick={logoutUser}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
