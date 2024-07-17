import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./(root)/_components/navbar";
import Footer from "./(root)/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  publisher: "HJ Codin Tech",
  authors: {
    name: "Hansen Jonatan",
    url: "https://instagram.com/hansenjonatann",
  },
  category: "Startup Tech",
  applicationName: "HJ Codin Tech",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "HJ Codin Tech",
    "Tech",
    "Startup",
    "Pemula",
    "Pengguna Awam",
    "Developer",
  ],

  title: "HJ Codin Tech | Solusi Anda untuk Belajar Teknologi!",
  icons: [{ rel: "icon", url: "/logo.png" }],
  description:
    "HJ Codin Tech adalah Startup yang didirikan oleh Hansen Jonatan untuk membantu pemula , pengguna awam dalam mempelajari teknologi. HJ Codin Tech juga menyediakan berbagai macam layanan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
