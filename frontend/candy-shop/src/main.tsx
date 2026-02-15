import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide the initial loading spinner once React has mounted
const hideLoader = () => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('hidden');
    // Remove from DOM after transition
    setTimeout(() => loader.remove(), 300);
  }
};

// IMPORTANT: Hide loader even if React fails to mount
// This prevents infinite loading screen
setTimeout(() => {
  hideLoader();
  console.log('[Main] Loader hidden via timeout fallback');
}, 3000);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Hide loader after a brief delay to ensure first paint
requestAnimationFrame(() => {
  requestAnimationFrame(hideLoader);
});

// Also add error handler to hide loader on any error
window.addEventListener('error', () => {
  setTimeout(hideLoader, 100);
});

window.addEventListener('unhandledrejection', () => {
  setTimeout(hideLoader, 100);
});
