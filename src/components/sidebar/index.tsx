import { getImageUrl } from '../../utils/utils';

function Sidebar() {
  return (
    <>
      {/** sidebar start */}
      <aside className="sidebar">
        {/** sidebar-header start */}
        <a href="/">
          <div className="sidebar-header">
            <div className="sidebar-logo-icon">
              <img src={getImageUrl('sm.png')} alt="logo" />
            </div>
            <div className="sidebar-logo-text">
              <h1 className="flex text-xl space-x-1">
                <span className="font-bold text-slate-500">React</span>
                <span className="font-bold text-primary-600">Toolkit</span>
              </h1>
              <span className="whitespace-nowrap text-base text-slate-500">
                Simply Customize
              </span>
            </div>
          </div>
        </a>
        {/** sidebar-header ends */}
        {/** sidebar-menu starts */}
        <ul className="sidebar-content">
          <li>
            <a href="/" className="sidebar-menu">
              <span className="sidebar-menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </span>
              <span className="sidebar-menu-text">Dashboard</span>
              <span className="sidebar-menu-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </a>
            <ul className="sidebar-submenu" style={{ height: '72px' }}>
              <li>
                <a href="/" className="sidebar-submenu-item active">
                  Analytics
                </a>
              </li>
              <li>
                <a href="/" className="sidebar-submenu-item">
                  Ecommerce
                </a>
              </li>
            </ul>
          </li>
          <div className="sidebar-menu-header">Applications</div>
        </ul>
        {/** sidebar-menu ends */}
      </aside>
      {/** sidebar end */}
    </>
  );
}

export default Sidebar;
