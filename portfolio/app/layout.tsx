import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';
import { DesktopProvider } from '@/context/DesktopContext';
import { TopBar } from '@/components/ui/TopBar';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

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
        shortcut: '/favicon.png',
        apple: '/favicon.png',
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
            <body className={cn("min-h-screen bg-background font-mono antialiased selection:bg-terminal-green selection:text-black pt-8", jetbrainsMono.variable)}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <DesktopProvider>
                    {/* Global Scanline Overlay */}
                    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-10"></div>

                    <TopBar />
                    {children}
                </DesktopProvider>
            </body>
        </html>
    );
}
