import { COMPANY } from '../company';

const AREAS = [
  'PCOS',
  'Thyroid',
  'Weight management',
  'Diabetes',
  'Skin and hair',
  "Men's health",
  'Preventive health',
] as const;

export function KyrosClinic() {
  return (
    <section id="kyros-clinic" aria-labelledby="kyros-title">
      <div className="wrap">
        <h2 id="kyros-title">{COMPANY.kyros.name}</h2>
        <article className="card">
          <h3>A doctor-led telemedicine clinic</h3>
          <p>
            Kyros Clinic connects patients across India with NMC-registered doctors for continuing care in
            the following areas:
          </p>
          <ul className="tags" aria-label="Areas of care">
            {AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <a className="button" href={COMPANY.kyros.url} rel="noopener">
            Visit {COMPANY.kyros.host}
          </a>
        </article>
      </div>
    </section>
  );
}
