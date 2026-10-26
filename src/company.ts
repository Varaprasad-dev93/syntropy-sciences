/**
 * Company facts, in one place. Every one of these is checked by AWS Activate,
 * banks and partners against the MCA record, so change them only from the
 * certificate of incorporation — never from memory.
 */
export const COMPANY = {
  name: 'Syntropy Sciences',
  legalName: 'Syntropy Sciences Private Limited',
  url: 'https://syntropysciences.in',
  email: 'founders@syntropysciences.in',
  cin: 'U86201AP2026PTC128651',
  incorporatedYear: 2026,
  registeredOffice: {
    lines: [
      'Venkata Sambasiva Residency, 7/2, Chandramouli Nagar,',
      'Pattabhipuram, Guntur 522006,',
      'Andhra Pradesh, India',
    ],
    street: 'Venkata Sambasiva Residency, 7/2, Chandramouli Nagar, Pattabhipuram',
    city: 'Guntur',
    region: 'Andhra Pradesh',
    postalCode: '522006',
    country: 'IN',
  },
  kyros: {
    name: 'Kyros Clinic',
    url: 'https://kyrosclinic.com',
    host: 'kyrosclinic.com',
  },
} as const;

export function organizationJsonLd() {
  const office = COMPANY.registeredOffice;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.url,
    email: COMPANY.email,
    foundingDate: String(COMPANY.incorporatedYear),
    identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: COMPANY.cin },
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    // Kyros Clinic is operated by this same legal entity, so it is a brand,
    // not a subOrganization.
    brand: { '@type': 'Brand', name: COMPANY.kyros.name, url: COMPANY.kyros.url },
  };
}
