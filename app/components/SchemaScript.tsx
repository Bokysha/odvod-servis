import Script from "next/script"

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Odvod Servis",
    image: "https://www.odvodservis.rs/images/logo.svg",
    "@id": "https://www.odvodservis.rs",
    url: "https://www.odvodservis.rs",
    telephone: "+381111234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vodovodska 123",
      addressLocality: "Beograd",
      postalCode: "11000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8154,
      longitude: 20.4732,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/odvodservis",
      "https://www.instagram.com/odvodservis",
      "https://www.linkedin.com/company/odvodservis",
    ],
    priceRange: "$$",
    servesCuisine: "Vodoinstalaterske usluge",
  }

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
