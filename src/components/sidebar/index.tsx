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
            <ul className="sidebar-submenu">
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
                  className="feather feather-box"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </span>
              <span className="sidebar-menu-text">Common</span>
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
            <ul className="sidebar-submenu">
              <li>
                <a href="./accordion.html" className="sidebar-submenu-item">
                  Accordion
                </a>
              </li>
              <li>
                <a href="./alert.html" className="sidebar-submenu-item">
                  Alert
                </a>
              </li>
              <li>
                <a href="./avatar.html" className="sidebar-submenu-item">
                  Avatar
                </a>
              </li>
              <li>
                <a href="./badge.html" className="sidebar-submenu-item">
                  Badge
                </a>
              </li>
              <li>
                <a href="./button.html" className="sidebar-submenu-item">
                  Button
                </a>
              </li>
              <li>
                <a href="./card.html" className="sidebar-submenu-item">
                  Card
                </a>
              </li>
              <li>
                <a href="./carousel.html" className="sidebar-submenu-item">
                  Carousel
                </a>
              </li>

              <li>
                <a href="./drawer.html" className="sidebar-submenu-item">
                  Drawer
                </a>
              </li>
              <li>
                <a href="./dropdown.html" className="sidebar-submenu-item">
                  {' '}
                  Dropdown
                </a>
              </li>
              <li>
                <a href="./list-group.html" className="sidebar-submenu-item">
                  {' '}
                  List Group
                </a>
              </li>
              <li>
                <a href="./modal.html" className="sidebar-submenu-item">
                  Modal
                </a>
              </li>
              <li>
                <a href="./pagination.html" className="sidebar-submenu-item">
                  {' '}
                  Pagination
                </a>
              </li>
              <li>
                <a href="./progress-bar.html" className="sidebar-submenu-item">
                  {' '}
                  Progress
                </a>
              </li>

              <li>
                <a href="./spinner.html" className="sidebar-submenu-item">
                  {' '}
                  Spinner
                </a>
              </li>
              <li>
                <a href="./tabs.html" className="sidebar-submenu-item">
                  Tab
                </a>
              </li>
              <li>
                <a href="./toast.html" className="sidebar-submenu-item">
                  Toast
                </a>
              </li>
              <li>
                <a href="./tooltip.html" className="sidebar-submenu-item">
                  {' '}
                  Tooltip
                </a>
              </li>
            </ul>
          </li>
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
                  className="feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span className="sidebar-menu-text">Calendar</span>
              <span className="sidebar-menu-arrow">
                <i data-feather="chevron-right" />
              </span>
            </a>
          </li>
        </ul>
        {/** sidebar-menu ends */}
      </aside>
      {/** sidebar end */}
    </>
  );
}

export default Sidebar;
