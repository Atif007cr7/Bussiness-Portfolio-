import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
    title: 'Ansari Mohd Atif | Flutter & Full Stack Developer',
    description: 'Flutter developer with backend expertise in Laravel, FastAPI & Django. I build scalable mobile apps, admin panels, and business systems.',
    keywords: 'Flutter Developer, Full Stack Developer, Laravel, FastAPI, Django, Mobile App Development, Backend Development, Mumbai Developer',
    authors: [{ name: 'Ansari Mohd Atif' }],
    openGraph: {
        title: 'Ansari Mohd Atif | Flutter & Full Stack Developer',
        description: 'Flutter developer with backend expertise in Laravel, FastAPI & Django. I build scalable mobile apps, admin panels, and business systems.',
        type: 'website',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ansari Mohd Atif | Flutter & Full Stack Developer',
        description: 'Flutter developer with backend expertise in Laravel, FastAPI & Django.',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <ThemeProvider>
                    <div className="stars"></div>
                    <div className="bg-glow"></div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
