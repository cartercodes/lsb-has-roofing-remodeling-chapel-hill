import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interHeading = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const interBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'HAS Roofing & Remodeling | Chapel Hill, NC',
  description:
    'HAS Roofing & Remodeling is a trusted roofing contractor in Chapel Hill, NC. Expert roof repair, replacement, installation, storm damage restoration, and residential roofing services. Licensed, insured, and backed by warranty. Call for a free roof inspection.',
  keywords:
    'roofing contractor, roof repair, roof replacement, roof installation, storm damage, residential roofing, Chapel Hill, NC, HAS Roofing & Remodeling',
  openGraph: {
    title: 'HAS Roofing & Remodeling | Roofing Contractor in Chapel Hill, NC',
    description:
      'Professional roofing services in Chapel Hill, NC. Roof repair, replacement, storm damage restoration, and new installations. Free inspections available.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interHeading.variable} ${interBody.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}