function Navbar() {
  const { Link, useLocation } = ReactRouterDOM;
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200 transition-colors" data-id="oaiiwadhk" data-path="components/Navbar.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="aji8xt0t0" data-path="components/Navbar.js">
        <div className="flex justify-between items-center h-16" data-id="p61s9iw30" data-path="components/Navbar.js">
          <div className="flex items-center space-x-3" data-id="ehg7jjmm1" data-path="components/Navbar.js">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg" data-id="m6cnmo05o" data-path="components/Navbar.js">
              <i className="fas fa-robot text-white text-lg" data-id="saj497sql" data-path="components/Navbar.js"></i>
            </div>
            <div data-id="iib74thhc" data-path="components/Navbar.js">
              <h1 className="text-xl font-bold text-gray-900" data-id="14rygffd7" data-path="components/Navbar.js">Risk Advisor AI</h1>
              <p className="text-xs text-gray-500" data-id="k9e9ef425" data-path="components/Navbar.js">Intelligent Risk Management Assistant</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8" data-id="g15ff52pv" data-path="components/Navbar.js">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/' ?
              'bg-blue-100 text-blue-700' :
              'text-gray-600 hover:text-gray-900'}`
              } data-id="6g2wsuqzi" data-path="components/Navbar.js">

              {t('chatAssistant')}
            </Link>
            <Link
              to="/analytics"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/analytics' ?
              'bg-blue-100 text-blue-700' :
              'text-gray-600 hover:text-gray-900'}`
              } data-id="klonpaaf3" data-path="components/Navbar.js">

              {t('analyticsDashboard')}
            </Link>
            <Link
              to="/settings"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/settings' ?
              'bg-blue-100 text-blue-700' :
              'text-gray-600 hover:text-gray-900'}`
              } data-id="oukjtybe5" data-path="components/Navbar.js">

              <i className="fas fa-cog mr-1" data-id="zz2mtgv6y" data-path="components/Navbar.js"></i>
              {t('settings')}
            </Link>
          </div>

          <div className="flex items-center space-x-3" data-id="5p6al9zz0" data-path="components/Navbar.js">
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full" data-id="rgmewvuxr" data-path="components/Navbar.js">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" data-id="9j3onj8sy" data-path="components/Navbar.js"></div>
              <span className="text-xs text-green-700 font-medium" data-id="w7ttu0ii1" data-path="components/Navbar.js">{t('aiOnline')}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>);

}