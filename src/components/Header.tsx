import { COMPANY } from '../company';
import { Mark } from './Mark';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#kyros-clinic', label: 'Kyros Clinic' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="wordmark" href="/" aria-label={`${COMPANY.name}, home`}>
          <Mark />
          {COMPANY.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
