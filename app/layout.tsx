import './globals.css';
import Navbar from '@/app/shared/Navbar';
import Footer from '@/app/shared/Footer';

export const metadata = {
  title: 'Office Zone',
  description: 'Coworking Space Finder',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
