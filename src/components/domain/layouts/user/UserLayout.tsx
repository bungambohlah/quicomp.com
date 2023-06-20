import React from 'react';
import PageContent from './PageContent';
import LeftSidebar from './LeftSidebar';

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Left drawer */}
      <div className="drawer drawer-mobile">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" title="Mobile Drawer" />
        <PageContent>{children}</PageContent>
        <LeftSidebar />
      </div>

      {/** Notification layout container from react-notifications */}
      {/* <NotificationContainer /> */}
    </>
  );
}

export default UserLayout;
