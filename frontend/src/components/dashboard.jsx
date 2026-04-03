// File: src/components/Dashboard.jsx
import { useState, useEffect } from 'react';

/* ── HOME PAGE ── */
function HomePage() {
  const [barWidth, setBarWidth] = useState('0%');
  const [bikeWidth, setBikeWidth] = useState('0%');
  const [macWidth, setMacWidth] = useState('0%');

  useEffect(() => {
    const t = setTimeout(() => {
      setBarWidth('50.8%');
      setBikeWidth('40%');
      setMacWidth('30%');
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="page-home" className="page active">
      <div className="section-header">
        <h2>Good morning, Arjun 👋</h2>
        <p>April 2026 · 27 days left in the month</p>
      </div>

      {/* Alerts */}
      <div className="alert-orange alert-banner">
        <div className="alert-dot"></div>
        <div className="alert-text">
          <strong>🟠 50% of salary used — Orange Alert</strong>
          <p>You've spent ₹25,000 out of ₹50,000 with 27 days left. Pace yourself.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="label">Monthly Salary</div>
          <div className="value">₹50,000</div>
          <div className="sub">April 2026</div>
          <div className="trend trend-up">+5%</div>
        </div>
        <div className="stat-card">
          <div className="label">Spent So Far</div>
          <div className="value" style={{ color: 'var(--accent3)' }}>₹25,400</div>
          <div className="sub">50.8% of salary</div>
          <div className="trend trend-down">↑ fast</div>
        </div>
        <div className="stat-card">
          <div className="label">Remaining</div>
          <div className="value" style={{ color: 'var(--accent2)' }}>₹24,600</div>
          <div className="sub">27 days left</div>
          <div className="trend trend-up">safe</div>
        </div>
        <div className="stat-card">
          <div className="label">Saved This Month</div>
          <div className="value" style={{ color: 'var(--accent)' }}>₹4,200</div>
          <div className="sub">Goal: ₹8,000</div>
          <div className="trend trend-up">52%</div>
        </div>
      </div>

      {/* Spend Bar */}
      <div className="spend-bar-wrap">
        <div className="spend-bar-label">
          <span>Monthly Budget Usage</span>
          <span style={{ color: 'var(--accent4)', fontWeight: 600 }}>50.8% used</span>
        </div>
        <div className="spend-bar">
          <div className="spend-fill spend-red" style={{ width: barWidth }}></div>
        </div>
        <div className="spend-breakdown">
          <div className="spend-cat"><div className="emoji">🍔</div><div className="cat-name">Food &amp; Delivery</div><div className="cat-amt" style={{ color: 'var(--accent3)' }}>₹6,200</div></div>
          <div className="spend-cat"><div className="emoji">🛒</div><div className="cat-name">Shopping</div><div className="cat-amt" style={{ color: 'var(--accent4)' }}>₹8,500</div></div>
          <div className="spend-cat"><div className="emoji">📱</div><div className="cat-name">Subscriptions</div><div className="cat-amt" style={{ color: 'var(--muted)' }}>₹1,800</div></div>
          <div className="spend-cat"><div className="emoji">🚌</div><div className="cat-name">Transport</div><div className="cat-amt" style={{ color: 'var(--muted)' }}>₹2,400</div></div>
          <div className="spend-cat"><div className="emoji">💡</div><div className="cat-name">Utilities</div><div className="cat-amt" style={{ color: 'var(--muted)' }}>₹3,100</div></div>
          <div className="spend-cat"><div className="emoji">🎮</div><div className="cat-name">Entertainment</div><div className="cat-amt" style={{ color: 'var(--muted)' }}>₹3,400</div></div>
        </div>
      </div>

      {/* Two Cols */}
      <div className="two-col">
        <div className="card">
          <h3>Recent Transactions</h3>
          <div className="txn"><div className="txn-icon" style={{ background: 'rgba(255,68,68,.1)' }}>🍕</div><div className="txn-info"><div className="txn-name">Zomato</div><div className="txn-date">Today, 1:32 PM</div></div><div className="txn-amount txn-neg">-₹340</div></div>
          <div className="txn"><div className="txn-icon" style={{ background: 'rgba(255,193,7,.1)' }}>🛍️</div><div className="txn-info"><div className="txn-name">Amazon</div><div className="txn-date">Yesterday</div></div><div className="txn-amount txn-neg">-₹1,299</div></div>
          <div className="txn"><div className="txn-icon" style={{ background: 'rgba(0,229,160,.1)' }}>💸</div><div className="txn-info"><div className="txn-name">Salary Credit</div><div className="txn-date">Apr 1</div></div><div className="txn-amount txn-pos">+₹50,000</div></div>
          <div className="txn"><div className="txn-icon" style={{ background: 'rgba(124,92,252,.1)' }}>📺</div><div className="txn-info"><div className="txn-name">Netflix</div><div className="txn-date">Apr 1</div></div><div className="txn-amount txn-neg">-₹649</div></div>
          <div className="txn"><div className="txn-icon" style={{ background: 'rgba(255,68,68,.1)' }}>🍔</div><div className="txn-info"><div className="txn-name">Swiggy</div><div className="txn-date">Mar 31</div></div><div className="txn-amount txn-neg">-₹280</div></div>
        </div>
        <div className="card">
          <h3>AI Insights 💡</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--surface2)', borderRadius: 12, padding: 14, fontSize: '.88rem', borderLeft: '3px solid var(--accent)' }}>
              <strong>Zomato habit detected</strong><br /><span style={{ color: 'var(--muted)' }}>You spent ₹400/week on Zomato last month. Cook 3 weeks → order week 4 to save ₹1,200/month.</span>
            </div>
            <div style={{ background: 'var(--surface2)', borderRadius: 12, padding: 14, fontSize: '.88rem', borderLeft: '3px solid var(--accent2)' }}>
              <strong>Subscription audit</strong><br /><span style={{ color: 'var(--muted)' }}>You have 4 active subscriptions totalling ₹1,800/mo. Consider pausing 1–2 you rarely use.</span>
            </div>
            <div style={{ background: 'var(--surface2)', borderRadius: 12, padding: 14, fontSize: '.88rem', borderLeft: '3px solid var(--accent4)' }}>
              <strong>Shopping spike</strong><br /><span style={{ color: 'var(--muted)' }}>₹8,500 on Amazon this month — 40% above your usual. 2 items were bought past midnight (impulse risk).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── DETAILS PAGE ── */
function DetailsPage() {
  const [salary, setSalary] = useState(50000);
  const [ratio, setRatio] = useState({ needs: 50, wants: 30, save: 20 });
  const [selectedMode, setSelectedMode] = useState('50/30/20');

  const handleModeSelect = (modeRatio) => {
    setSelectedMode(modeRatio);
    const [n, w, s] = modeRatio.split('/').map(Number);
    setRatio({ needs: n, wants: w, save: s });
  };

  const needsAmt = Math.round(salary * ratio.needs / 100).toLocaleString('en-IN');
  const wantsAmt = Math.round(salary * ratio.wants / 100).toLocaleString('en-IN');
  const saveAmt = Math.round(salary * ratio.save / 100).toLocaleString('en-IN');

  return (
    <div id="page-details" className="page active">
      <div className="section-header">
        <h2>My Details ⚙️</h2>
        <p>Set your salary, spending mode, and budget ratios</p>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3>Personal &amp; Income Info</h3>
        <div className="form-row">
          <div className="form-group"><label>Full Name</label><input type="text" defaultValue="Arjun Kumar" /></div>
          <div className="form-group"><label>Mobile</label><input type="text" defaultValue="+91 98765 43210" /></div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Monthly Salary (₹)</label>
            <input type="number" value={salary} onChange={e => setSalary(parseInt(e.target.value) || 0)} />
          </div>
          <div className="form-group"><label>Pay Date</label><input type="number" defaultValue="1" min="1" max="31" /></div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Occupation</label>
            <select>
              <option>Salaried Employee</option>
              <option>Student</option>
              <option>Freelancer</option>
              <option>Business Owner</option>
            </select>
          </div>
          <div className="form-group"><label>City</label><input type="text" defaultValue="Delhi, IN" /></div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3>Choose Your Spending Mode</h3>
        <div className="mode-grid">
          {[
            { ratio: '50/30/20', icon: '⚖️', name: 'Balanced', desc: '50% needs · 30% wants · 20% savings' },
            { ratio: '70/10/20', icon: '🛡️', name: 'Conservative', desc: '70% needs · 10% wants · 20% savings' },
            { ratio: '40/40/20', icon: '🎉', name: 'Lifestyle', desc: '40% needs · 40% wants · 20% savings' },
          ].map(m => (
            <div
              key={m.ratio}
              className={`mode-card${selectedMode === m.ratio ? ' selected' : ''}`}
              onClick={() => handleModeSelect(m.ratio)}
            >
              <div className="mode-icon">{m.icon}</div>
              <div className="mode-name">{m.name}</div>
              <div className="mode-desc">{m.desc}</div>
            </div>
          ))}
        </div>
        <div className="ratio-display">
          <div style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: 8 }}>Budget Breakdown — ₹{salary.toLocaleString('en-IN')} salary</div>
          <div className="ratio-bar-wrap">
            <div className="ratio-label">
              <span>Needs <strong style={{ color: 'var(--text)' }}>₹{needsAmt}</strong></span>
              <span>Wants <strong style={{ color: 'var(--text)' }}>₹{wantsAmt}</strong></span>
              <span>Savings <strong style={{ color: 'var(--accent2)' }}>₹{saveAmt}</strong></span>
            </div>
            <div className="ratio-bar">
              <div className="ratio-needs" style={{ width: ratio.needs + '%' }}></div>
              <div className="ratio-wants" style={{ width: ratio.wants + '%' }}></div>
              <div className="ratio-save" style={{ width: ratio.save + '%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-save" onClick={() => alert('✅ Settings saved!')}>Save Settings</button>
    </div>
  );
}

/* ── GOALS PAGE ── */
function GoalsPage() {
  const [activeGoalMode, setActiveGoalMode] = useState(0);
  const [bikeWidth, setBikeWidth] = useState('0%');
  const [macWidth, setMacWidth] = useState('0%');

  useEffect(() => {
    const t = setTimeout(() => {
      setBikeWidth('40%');
      setMacWidth('30%');
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const goalModes = [
    { icon: '🎯', name: 'Focus Mode', sub: 'Goal-only notifications' },
    { icon: '⚖️', name: 'Balanced Mode', sub: 'Goal + smart spend tips' },
    { icon: '🍕', name: 'Foody Mode', sub: 'Food-first notifications' },
  ];

  return (
    <div id="page-goals" className="page active">
      <div className="section-header">
        <h2>My Goals 🎯</h2>
        <p>Set goals and let FinFlow nudge you toward them</p>
      </div>

      <div className="goal-modes">
        {goalModes.map((m, i) => (
          <div
            key={i}
            className={`goal-mode-btn${activeGoalMode === i ? ' active' : ''}`}
            onClick={() => setActiveGoalMode(i)}
          >
            <div className="gm-icon">{m.icon}</div>
            <div className="gm-name">{m.name}</div>
            <div className="gm-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="goal-card">
        <div className="goal-emoji">🏍️</div>
        <div className="goal-info">
          <div className="goal-name">Royal Enfield Bike</div>
          <div className="goal-meta">Target: ₹1,80,000 · Saved: ₹72,000 · Est. completion: Aug 2026</div>
          <div className="goal-progress"><div className="goal-fill" style={{ width: bikeWidth }}></div></div>
          <div className="goal-pct">40% complete</div>
          <div className="goal-notif">💡 You spent ₹400/week on Zomato. Save ₹300 next week → reach goal 3 weeks earlier!</div>
        </div>
      </div>

      <div className="goal-card">
        <div className="goal-emoji">💻</div>
        <div className="goal-info">
          <div className="goal-name">MacBook Pro</div>
          <div className="goal-meta">Target: ₹1,30,000 · Saved: ₹39,000 · Est. completion: Dec 2026</div>
          <div className="goal-progress"><div className="goal-fill" style={{ width: macWidth }}></div></div>
          <div className="goal-pct">30% complete</div>
          <div className="goal-notif">💡 Pause 2 subscriptions for 3 months → saves ₹3,600 toward MacBook.</div>
        </div>
      </div>

      <button className="add-goal-btn" onClick={() => alert('Add goal modal coming soon!')}>+ Add New Goal</button>
    </div>
  );
}

/* ── WALLET PAGE ── */
function WalletPage() {
  return (
    <div id="page-wallet" className="page active">
      <div className="section-header">
        <h2>Wallet 💳</h2>
        <p>Connect bank, track where your money actually goes</p>
      </div>

      <div className="wallet-hero">
        <div className="wallet-hero-label">Total Balance</div>
        <div className="wallet-hero-amount">₹28,840</div>
        <div className="wallet-hero-sub">↑ ₹4,200 saved this month</div>
        <div className="wallet-actions">
          <button className="wallet-btn wallet-btn-primary">+ Add Money</button>
          <button className="wallet-btn wallet-btn-secondary">⬇ Withdraw</button>
          <button className="wallet-btn wallet-btn-secondary">🔗 Link Bank</button>
        </div>
      </div>

      <div className="connected-accounts">
        <div className="account-card">
          <div className="bank-icon" style={{ background: 'rgba(0,112,255,.15)' }}>🏦</div>
          <div className="account-info">
            <div className="acct-name">HDFC Bank</div>
            <div className="acct-num">••••  4821</div>
            <div className="acct-bal">₹22,600</div>
          </div>
          <div className="connected-badge">✓ Connected</div>
        </div>
        <div className="account-card">
          <div className="bank-icon" style={{ background: 'rgba(255,149,0,.15)' }}>💳</div>
          <div className="account-info">
            <div className="acct-name">UPI / GPay</div>
            <div className="acct-num">arjun@okhdfc</div>
            <div className="acct-bal">₹6,240</div>
          </div>
          <div className="connected-badge">✓ Connected</div>
        </div>
      </div>

      <div className="spenders-list">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1rem' }}>Tracked Spenders</h3>
          <button onClick={() => alert('Add spender!')} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--accent)', borderRadius: 8, padding: '6px 14px', fontSize: '.8rem', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>+ Add</button>
        </div>
        {[
          { icon: '🍕', bg: 'rgba(255,68,68,.1)', name: 'Zomato', tag: 'Food', amount: '₹6,200' },
          { icon: '🛍️', bg: 'rgba(255,193,7,.1)', name: 'Amazon', tag: 'Shopping', amount: '₹8,500' },
          { icon: '📺', bg: 'rgba(124,92,252,.1)', name: 'Netflix', tag: 'Subscription', amount: '₹649' },
          { icon: '🚗', bg: 'rgba(0,229,160,.1)', name: 'Ola / Uber', tag: 'Transport', amount: '₹2,400' },
          { icon: '🍔', bg: 'rgba(255,68,68,.1)', name: 'Swiggy', tag: 'Food', amount: '₹1,850' },
          { icon: '👤', bg: 'rgba(0,112,255,.1)', name: 'Rahul (Friend)', tag: 'Personal', amount: '₹1,000' },
        ].map((s, i) => (
          <div key={i} className="spender-item">
            <div className="spender-icon" style={{ background: s.bg }}>{s.icon}</div>
            <div className="spender-name">{s.name}</div>
            <span className="spender-tag">{s.tag}</span>
            <div className="spender-amount">{s.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── GROW SAVINGS PAGE ── */
function IncomePage() {
  const [depositAmt, setDepositAmt] = useState('');

  const earn = Math.round((parseFloat(depositAmt) || 0) * 0.055);
  const total = (parseFloat(depositAmt) || 0) + earn;

  return (
    <div id="page-income" className="page active">
      <div className="section-header">
        <h2>Grow Your Savings 📈</h2>
        <p>Deposit savings with us — we invest &amp; share the returns with you</p>
      </div>

      <div className="invest-hero">
        <h2>Your money works while you sleep 💸</h2>
        <p>Deposit your monthly savings into FinFlow's smart wallet. We invest it in diversified funds and pass the returns directly to you.</p>
        <div className="interest-rate">6.8% p.a.</div>
        <div className="interest-label">Average annual return (last 12 months)</div>
      </div>

      <div className="invest-cards">
        {[
          { icon: '🛡️', name: 'Safe Jar', rate: '5.5%', desc: 'Liquid fund · Withdraw anytime' },
          { icon: '⚖️', name: 'Growth Jar', rate: '7.2%', desc: 'Debt + equity mix · 6-month lock' },
          { icon: '🚀', name: 'Max Jar', rate: '11.4%', desc: 'Equity funds · 1-year lock' },
        ].map((c, i) => (
          <div key={i} className="invest-card">
            <div className="i-icon">{c.icon}</div>
            <div className="i-name">{c.name}</div>
            <div className="i-rate">{c.rate}</div>
            <div className="i-desc">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="deposit-form">
        <h3>Deposit to Safe Jar</h3>
        <input
          className="amount-input-big"
          type="number"
          placeholder="₹ Enter amount"
          value={depositAmt}
          onChange={e => setDepositAmt(e.target.value)}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <div style={{ background: 'var(--surface2)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
            <div style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 4 }}>You'll earn in 1 year</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent2)' }}>₹{earn.toLocaleString('en-IN')}</div>
          </div>
          <div style={{ background: 'var(--surface2)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
            <div style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 4 }}>Total after 1 year</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.3rem', fontWeight: 800 }}>₹{total.toLocaleString('en-IN')}</div>
          </div>
        </div>
        <button className="deposit-btn" onClick={() => alert('🎉 Deposit initiated!')}>Deposit Now →</button>
      </div>
    </div>
  );
}

/* ── DASHBOARD ROUTER ── */
export default function Dashboard({ activePage }) {
  const pages = {
    home: <HomePage />,
    details: <DetailsPage />,
    goals: <GoalsPage />,
    wallet: <WalletPage />,
    income: <IncomePage />,
  };

  return pages[activePage] || <HomePage />;
}
