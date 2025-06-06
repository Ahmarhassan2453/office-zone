import './globals.css';
import Navbar from '@/app/shared/Navbar';
import Footer from '@/app/shared/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Zone',
  description: 'Coworking Space Finder',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black font-poppins">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
