import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Piyush Bhoyar | AI & Full-Stack Developer",
    template: "%s | Piyush Bhoyar",
  },
  description: "Piyush Bhoyar is a Full-Stack Developer and AI Engineer specialized in Agentic AI, Python backend systems, and high-performance web solutions.",
  keywords: [
    "Piyush Bhoyar", "AI Developer", "Full Stack Developer", "Agentic AI", 
    "Python Developer Nagpur", "YCCE Nagpur", "Ceres AI", "Next.js Portfolio",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Piyush Bhoyar", url: "https://piyushbhoyar.dev" }],
  creator: "Piyush Bhoyar",
  publisher: "Piyush Bhoyar",
  metadataBase: new URL("https://piyushbhoyar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Piyush Bhoyar | AI & Full-Stack Developer",
    description: "Building the intersection of human creativity and machine learning. Explore my work in Agentic AI and Full-Stack development.",
    url: "https://piyushbhoyar.dev",
    siteName: "Piyush Bhoyar Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg", 
        width: 1200,
        height: 630,
        alt: "Piyush Bhoyar | AI & Full-Stack Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Bhoyar | AI & Full-Stack Developer",
    description: "Engineering the future with Agentic AI and scalable full-stack systems.",
    images: ["https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg"],
    creator: "@piyushbhoyar131",
  },
  icons: {
    icon: [
      { url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg" },
      { url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "https://pbs.twimg.com/profile_images/1969875126146740224/MgyHX9EC_400x400.jpg" },
    ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Piyush Bhoyar",
              "jobTitle": "AI & Full-Stack Developer",
              "url": "https://piyushbhoyar.dev",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Yeshwantrao Chavan College Of Engineering"
              },
              "sameAs": [
                "https://github.com/Piyush22070",
                "https://www.linkedin.com/in/piyush-bhoyar",
                "https://x.com/piyushbhoyar131"
              ]
            })
          }}
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}