import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | YASH',
  description: 'My Personal Portfolio - Showcasing my Work and Skills.',
  keywords: ['DevOps', 'Cloud Engineer', 'AWS', 'Azure', 'Kubernetes', 'Terraform', 'Portfolio'],
  authors: [{ name: 'Yash Prashant Bodhe' }],
  creator: 'Yash Prashant Bodhe',
  publisher: 'Yash Prashant Bodhe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-yash-azure.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Portfolio | YASH',
    description: 'My Personal Portfolio - Showcasing my Work and Skills.',
    url: 'https://portfolio-yash-azure.vercel.app/',
    siteName: 'YASH Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'YASH Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | YASH',
    description: 'My Personal Portfolio - Showcasing my Work and Skills.',
    images: ['/opengraph-image.png'],
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
}
