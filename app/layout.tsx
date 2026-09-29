import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const SITE_URL = 'https://nanocarbon.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NanoCarbón® Colombia | Película de Polímero en Carbón',
    template: '%s | NanoCarbón®',
  },
  description: 'Película protectora de polímero en carbón molecular para celulares, tablets y pantallas de carros. Absorbe impactos mecánicos, nunca se astilla, dureza 9H y acabados Clear, Mate y AntiEspía.',
  keywords: [
    'NanoCarbon',
    'NanoCarbon Colombia',
    'pelicula de polimero en carbon',
    'protector de pantalla colombia',
    'protector pantalla vehiculos',
    'protector pantalla toyota hilux',
    'protector pantalla mazda cx-30',
    'protector pantalla iphone antiespia',
    'protector pantalla samsung',
    'pantallas vehiculares colombia',
    'mas accesorios sas'
  ],
  authors: [{ name: 'Mas Accesorios SAS' }],
  creator: 'Mas Accesorios SAS',
  publisher: 'NanoCarbón Colombia',
  formatDetection: {
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'NanoCarbón® Colombia | Película de Polímero en Carbón',
    description: 'Más tenaz que el vidrio templado. Infundido con carbono molecular para absorber impactos sin fracturarse. Cobertura nacional en Colombia.',
    url: SITE_URL,
    siteName: 'NanoCarbón® Oficial',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/hero-render.jpg',
        width: 1200,
        height: 630,
        alt: 'NanoCarbón® Película de Polímero en Carbón',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NanoCarbón® | Película de Polímero en Carbón',
    description: 'Protector de pantalla en polímero molecular para celulares y pantallas de automóviles. Envíos en Colombia.',
    images: ['/hero-render.jpg'],
  },
  icons: {
    icon: '/logo-2026.jpg',
    apple: '/logo-2026.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nanocarbon.pages.dev/#organization',
      'name': 'NanoCarbón® Colombia',
      'url': 'https://nanocarbon.pages.dev',
      'logo': 'https://nanocarbon.pages.dev/logo-2026.jpg',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+57-315-851-2091',
        'contactType': 'customer service',
        'areaServed': 'CO',
        'availableLanguage': 'Spanish',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nanocarbon.pages.dev/#localbusiness',
      'name': 'NanoCarbón® Colombia',
      'image': 'https://nanocarbon.pages.dev/hero-render.jpg',
      'telephone': '+573158512091',
      'url': 'https://nanocarbon.pages.dev',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'CO',
        'addressRegion': 'Colombia',
      },
      'description': 'Distribuidor oficial de películas protectoras de polímero en carbón molecular para smartphones, tablets y pantallas de infoentretenimiento vehiculares.',
    },
    {
      '@type': 'Product',
      '@id': 'https://nanocarbon.pages.dev/#product',
      'name': 'Lámina Protectora NanoCarbón®',
      'image': 'https://nanocarbon.pages.dev/hero-render.jpg',
      'description': 'Película de polímero en carbón molecular de alta resistencia al impacto para dispositivos móviles y pantallas automotrices.',
      'brand': {
        '@type': 'Brand',
        'name': 'NanoCarbón',
      },
      'offers': {
        '@type': 'AggregateOffer',
        'priceCurrency': 'COP',
        'availability': 'https://schema.org/InStock',
        'areaServed': 'CO',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  );
}
