// File: src/components/Sidebar.jsx

export default function Sidebar({ activePage, onNavigate }) {
  const navItems = [
    { id: 'home',    icon: '🏠', label: 'Home' },
    { id: 'details', icon: '⚙️', label: 'My Details' },
    { id: 'goals',   icon: '🎯', label: 'Goals' },
    { id: 'wallet',  icon: '💳', label: 'Wallet' },
    { id: 'income',  icon: '📈', label: 'Grow Savings' },
  ];

  return (
    <nav className="sidebar">
      <div className="logo">Fin<span>Flow</span></div>

      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item${activePage === item.id ? ' active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div className="sidebar-bottom">
        <div className="user-chip">
          <div className="avatar">AK</div>
          <div className="user-info">
            <div className="user-name">Arjun K.</div>
            <div className="user-plan">Free Plan</div>
          </div>
        </div>
      </div>
    </nav>
  );
}