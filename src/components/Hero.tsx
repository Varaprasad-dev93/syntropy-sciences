import { COMPANY } from '../company';

export function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <p className="eyebrow">Health technology · India</p>
        <h1>{COMPANY.legalName}</h1>
        <p className="lede">
          A health-technology company building Kyros Clinic, India's doctor-led clinic for long-term
          hormonal and metabolic health.
        </p>
      </div>
    </div>
  );
}
