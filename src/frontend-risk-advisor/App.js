const { BrowserRouter, Routes, Route, Navigate } = ReactRouterDOM;

function App() {
  return (
    <SettingsProvider data-id="s1rg4l04p" data-path="App.js">
      <LanguageProvider data-id="itekya5ca" data-path="App.js">
        <BrowserRouter data-id="wzt9la9oi" data-path="App.js">
          <div className="min-h-screen bg-gray-50 transition-colors" data-id="ltziw1f7w" data-path="App.js">
            <Navbar data-id="jtcgbd42r" data-path="App.js" />
            <main className="pt-16" data-id="mkpbalhfz" data-path="App.js">
              <Routes data-id="fx7wkb9wk" data-path="App.js">
                <Route path="/" element={<Home data-id="kxjqa1ayv" data-path="App.js" />} data-id="4bpvzbj8u" data-path="App.js" />
                <Route path="/features/:feature" element={<FeatureDetail data-id="a4453m1gz" data-path="App.js" />} data-id="ihu3vnod0" data-path="App.js" />
                <Route path="/analytics" element={<Analytics data-id="zkaqcxnpm" data-path="App.js" />} data-id="6906oed92" data-path="App.js" />
                <Route path="/settings" element={<Settings data-id="rsvp6or3h" data-path="App.js" />} data-id="vlqsdhrsh" data-path="App.js" />
                <Route path="*" element={<Navigate to="/" replace data-id="wahk5kxdp" data-path="App.js" />} data-id="oy7j1xnq2" data-path="App.js" />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </SettingsProvider>);

}