import { COMPANY } from '../company';

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Contact</h2>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </dd>
          </div>
          <div>
            <dt>Registered office</dt>
            <dd>
              <address>
                {COMPANY.legalName}
                {COMPANY.registeredOffice.lines.map((line) => (
                  <span key={line}>
                    <br />
                    {line}
                  </span>
                ))}
              </address>
            </dd>
          </div>
          <div>
            <dt>Corporate Identity Number (CIN)</dt>
            <dd>{COMPANY.cin}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
