import { COMPANY } from '../company';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          <span>
            © {COMPANY.incorporatedYear} {COMPANY.legalName}. All rights reserved.
          </span>
          <span className="sep" aria-hidden="true">·</span>
          <span>Operator of {COMPANY.kyros.name}</span>
          <span className="sep" aria-hidden="true">·</span>
          <span>CIN {COMPANY.cin}</span>
        </p>
      </div>
    </footer>
  );
}
