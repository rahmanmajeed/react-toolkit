function App() {
  return (
    <div id="app">
      {/** sidebar start */}
      <aside className="sidebar">sidebar</aside>
      {/** sidebar end */}
      {/** wrapper starts */}
      <div className="wrapper">
        <header className="header">header</header>
        {/** Page Content Starts */}
        <div className="content">
          {/** Main Content Starts */}
          <main>main content</main>
          {/** Main Content ends */}
          {/** Footer Starts */}
          <footer className="footer"><div>footer</div></footer>
          {/** Footer Ends */}
        </div>
        {/** Page Content ends */}
      </div>
      {/** wrapper ends */}
    </div>
  );
}

export default App;
