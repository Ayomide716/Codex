import { useState } from 'react';

function Header({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav container" aria-label="Main navigation">
        <div className="brand">
          <span className="brand-badge" aria-hidden="true">
            SS
          </span>
          <span>SkillSprint</span>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          ☰
        </button>

        <div className="nav-links desktop">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="auth-actions desktop">
          <button className="btn btn-ghost">Log in</button>
          <button className="btn btn-primary">Sign up free</button>
        </div>
      </nav>

      <div id="mobile-nav" className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button className="btn btn-ghost">Log in</button>
        <button className="btn btn-primary">Sign up free</button>
      </div>
    </header>
  );
}

export default Header;
