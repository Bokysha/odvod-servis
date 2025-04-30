import { Inter } from "next/font/google"
import type { Metadata } from "next"
import LayoutWrapper from "./components/LayoutWrapper"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../app/slicker.css"
const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "Odvod Servis | Profesionalne vodoinstalaterske usluge",
    template: "%s | Odvod Servis",
  },
  description:
    "Odvod Servis pruža profesionalne vodoinstalaterske usluge u Beogradu. Odgušenje kanalizacije, popravke instalacija, hitne intervencije 24/7.",
  keywords: [
    "vodoinstalater",
    "odgušenje kanalizacije",
    "vodovodne instalacije",
    "curenje vode",
    "popravka bojlera",
    "hitne intervencije",
  ],
  authors: [{ name: "Odvod Servis" }],
  creator: "Odvod Servis",
  publisher: "Odvod Servis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.odvodservis.rs",
  },
  openGraph: {
    title: "Odvod Servis | Profesionalne vodoinstalaterske usluge",
    description:
      "Odvod Servis pruža profesionalne vodoinstalaterske usluge. Pouzdano, brzo i kvalitetno rešavamo sve probleme sa vodovodnim instalacijama.",
    url: "https://www.odvodservis.rs",
    siteName: "Odvod Servis",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://www.odvodservis.rs/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Odvod Servis - Profesionalne vodoinstalaterske usluge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odvod Servis | Profesionalne vodoinstalaterske usluge",
    description:
      "Odvod Servis pruža profesionalne vodoinstalaterske usluge. Pouzdano, brzo i kvalitetno rešavamo sve probleme sa vodovodnim instalacijama.",
    images: ["https://www.odvodservis.rs/images/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
