import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://nanocarbon.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Protector de Pantalla para Carros y Pantallas Digitales | NanoCarbón® Colombia',
    template: '%s | NanoCarbón®',
  },
  description: 'Protectores de alta resistencia para pantallas de carros, tableros digitales de infoentretenimiento, celulares y tablets. Polímero en carbón molecular que absorbe impactos mecánicos, nunca se astilla, dureza 9H y acabados Clear y Mate Antirreflejo.',
  keywords: [
    'protector de pantalla para carros',
    'protectores para pantallas digitales',
    'protector pantalla autos colombia',
    'protector pantalla tactil carro',
    'protector pantalla infoentretenimiento',
    'lamina pantalla vehiculos',
    'protector pantalla toyota hilux',
    'protector pantalla mazda cx-30',
    'protector pantalla byd',
    'protector pantalla chevrolet tracker',
    'NanoCarbon',
    'NanoCarbon Colombia',
    'pelicula de polimero en carbon',
    'protector de pantalla colombia',
    'protector pantalla iphone antiespia',
    'protector pantalla samsung',
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
        url: '/logo-whatsapp.jpg',
        width: 800,
        height: 800,
        alt: 'Logo NanoCarbón®',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'NanoCarbón® | Película de Polímero en Carbón',
    description: 'Protector de pantalla en polímero molecular para celulares y pantallas de automóviles. Envíos en Colombia.',
    images: ['/logo-whatsapp.jpg'],
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
  verification: {
    google: 'QZvzliqYaYSWK5AdXQaQCCslzuwmtL9Xqz--FQXEzG0',
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
        '@type': 'Offer',
        'url': 'https://nanocarbon.pages.dev/order',
        'priceCurrency': 'COP',
        'price': '50000',
        'priceValidUntil': '2027-12-31',
        'availability': 'https://schema.org/InStock',
        'itemCondition': 'https://schema.org/NewCondition',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '128',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://nanocarbon.pages.dev/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuál es el mejor protector de pantalla para carros y pantallas digitales?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La película protectora de polímero en carbón molecular NanoCarbón® es la mejor opción para pantallas de automóviles y pantallas digitales táctiles. A diferencia del vidrio templado que se astilla por la radiación solar y vibraciones, NanoCarbón absorbe impactos mecánicos, nunca se quiebra y ofrece acabado Mate Antirreflejo para eliminar destellos solares al conducir.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Tienen protectores de pantalla para marcas como Toyota, Mazda, BYD y Chevrolet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Contamos con corte computarizado a la medida exacta para centros de infoentretenimiento y clúster digital de Toyota (Hilux, Corolla Cross, Prado), Mazda (CX-30, Mazda 3), BYD (Song Plus, Dolphin), Chevrolet (Tracker, Onix), Tesla, BMW, Mercedes-Benz y pantallas universales.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿El protector para carro altera la sensibilidad táctil o la visibilidad?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Mantiene la respuesta táctil instantánea con 0 latencia y ofrece 99.8% de claridad óptica sin distorsión de color.'
          }
        }
      ]
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="QZvzliqYaYSWK5AdXQaQCCslzuwmtL9Xqz--FQXEzG0" />
        <meta property="og:image" content={`${SITE_URL}/logo-whatsapp.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/logo-whatsapp.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
