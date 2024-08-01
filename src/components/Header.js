const Header = () => {
    return (
        <>
            <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
            </a>
            <div className="flex-grow-1 text-center">
              <h1 className="text-white mb-0">Easy Reads</h1>
            </div>
          </div>
        </div>
      </header>
        </>
    );
};

export default Header;