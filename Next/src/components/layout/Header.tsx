import { useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';
import { NAV_LINKS } from '../../data/content';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const hrefs = NAV_LINKS.map((l) => l.href);

export function Header() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(hrefs);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Next Z Solutions home">
          <span className="brand-name">Next <span className="z">Z</span></span>
          <span className="brand-sub">Solutions</span>
        </a>

        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav" aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name="i-moon" className="icon-moon" />
            <Icon name="i-sun" className="icon-sun" />
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name="i-menu" className="icon-open" />
            <Icon name="i-close" className="icon-shut" />
          </button>
        </div>
      </div>
    </header>
  );
}

