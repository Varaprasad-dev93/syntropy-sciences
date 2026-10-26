import { COMPANY } from '../company';

export function About() {
  const office = COMPANY.registeredOffice;
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="wrap">
        <h2 id="about-title">About</h2>
        <div className="prose">
          <p>
            {COMPANY.name} is a private limited company incorporated in India in {COMPANY.incorporatedYear},
            with its registered office in {office.city}, {office.region}. The company builds and operates
            Kyros Clinic.
          </p>
          <p>
            Kyros Clinic is a telemedicine platform where NMC-registered doctors provide ongoing care,
            supported by clinical coordinators, through a patient app, a doctor portal and secure health
            records. All patient data is stored and processed in India.
          </p>
        </div>
      </div>
    </section>
  );
}
