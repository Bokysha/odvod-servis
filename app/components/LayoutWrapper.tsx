"use client"

import { ThemeContextProvider } from "../context/ThemeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SchemaOrg from "../components/SchemaScript"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SchemaOrg />
    </ThemeContextProvider>
  )
}
