import './globals.css'

export const metadata = {
  title: "CoCreate",
  description:
    "PESU Venture Labs is a deep-tech-focused micro fund that operates in the pre-prototype or pre-ideation phase and aims to help industry professionals, student entrepreneurs, and academicians build scalable startups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
