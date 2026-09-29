import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'NanoCarbón® | Película de Polímero en Carbón',
  description: 'Película protectora de polímero en carbón. Dureza 9H, resistencia balística a impactos, propiedad antibacterial y alta definición.',
  icons: {
    icon: '/logo-2026.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  );
}
