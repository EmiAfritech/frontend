// Configure tailwind theme
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        secondary: '#0ea5e9',
        accent: '#7c3aed',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: '#1e293b',
        light: '#f8fafc'
      }
    }
  }
};

// Render the app
ReactDOM.render(
  <React.StrictMode data-id="0xvbgui7p" data-path="index.js">
    <App data-id="jlkl3351k" data-path="index.js" />
  </React.StrictMode>,
  document.getElementById('root')
);