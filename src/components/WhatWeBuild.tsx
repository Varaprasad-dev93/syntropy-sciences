const ITEMS = [
  {
    title: 'Patient app',
    body: 'Consultations, prescriptions, lab reports and reminders in one place.',
  },
  {
    title: 'Doctor platform',
    body: 'Consultations, prescribing and longitudinal patient records.',
  },
  {
    title: 'Secure health infrastructure',
    body: 'Encrypted health records, hosted in India.',
  },
] as const;

export function WhatWeBuild() {
  return (
    <section id="what-we-build" aria-labelledby="build-title">
      <div className="wrap">
        <h2 id="build-title">What we build</h2>
        <div className="grid">
          {ITEMS.map((item) => (
            <div className="item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
