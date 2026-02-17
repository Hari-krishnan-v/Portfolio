import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: {
        default: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
        template: `%s | ${portfolioData.personalInfo.name}`,
    },
    description: portfolioData.professionalSummary,
    keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Hari Krishnan', 'Software Engineer'],
    authors: [{ name: portfolioData.personalInfo.name }],
    creator: portfolioData.personalInfo.name,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://harikrishnan.vercel.app',
        title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
        description: portfolioData.professionalSummary,
        siteName: portfolioData.personalInfo.name,
        images: [
            {
                url: 'https://harikrishnan.vercel.app/og-image.jpg', // Placeholder
                width: 1200,
                height: 630,
                alt: portfolioData.personalInfo.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
        description: portfolioData.professionalSummary,
        images: ['https://harikrishnan.vercel.app/og-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: portfolioData.personalInfo.name,
        url: 'https://harikrishnan.vercel.app',
        jobTitle: portfolioData.personalInfo.role,
        sameAs: [
            portfolioData.personalInfo.github,
            portfolioData.personalInfo.linkedin,
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: portfolioData.personalInfo.location,
        },
        description: portfolioData.professionalSummary,
    };

    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}

