// File: src/App.jsx
import { useState } from 'react';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div id="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main">
        <Dashboard activePage={activePage} />
      </main>
    </div>
  );
}

export default App;