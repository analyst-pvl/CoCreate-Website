import './globals.css'

export const metadata = {
  title: "CoCreate",
  description:
    "CoCreate Ventures is an Idea stage VC fund that primarily focuses on Campus Entrepreneurs, working with Industry partners, Higher Educational Institutions & Students to build deep-tech ventures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
