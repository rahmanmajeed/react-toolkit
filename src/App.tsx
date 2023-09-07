import { useEffect } from 'react';
import Sidebar from './components/sidebar';
import useClassRef from './hooks/useClassRef';

function App() {
  const wrapper = useClassRef('.wrapper');
  const sidebar = useClassRef('.sidebar');
  const sidebarToggle = useClassRef('.sidebar-toggle');
  const content = useClassRef('.sidebar-content');
  const menuItems = useClassRef('.sidebar-menu');
  useEffect(() => {
    console.log(sidebar.current);
  }, [sidebar, wrapper, sidebarToggle, content, menuItems]);
  return (
    <div id="app">
      {/** sidebar start */}
      <Sidebar />
      {/** sidebar end */}
      {/** wrapper starts */}
      <div className="wrapper">
        <header className="header">
          <div className="container-fluid flex items-center justify-between">
            {/** Sidebar Toggle & Search Starts  */}
            <div className="flex items-center space-x-6 overflow-visible">
              {/* sidebar toggle button */}
              <button type="button" className="sidebar-toggle">
                <span className="flex space-x-4">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </span>
              </button>
              {/* sidebar toggle ends */}
              {/* searchbar starts */}

              <button
                type="button"
                className="h-10 w-72 items-center overflow-hidden px-3 bg-slate-100 text-slate-400 rounded-md sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search text-slate-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="ml-2 text-sm text-slate-400">Search</span>
              </button>
              {/* searchbar ends */}
            </div>
          </div>
        </header>
        {/** Page Content Starts */}
        <div className="content">
          {/** Main Content Starts */}
          <main>main content</main>
          {/** Main Content ends */}
          {/** Footer Starts */}
          <footer className="footer">
            <div>footer</div>
          </footer>
          {/** Footer Ends */}
        </div>
        {/** Page Content ends */}
      </div>
      {/** wrapper ends */}
    </div>
  );
}

export default App;
